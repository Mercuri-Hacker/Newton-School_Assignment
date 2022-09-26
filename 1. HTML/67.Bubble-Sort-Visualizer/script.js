let globalNumbers = []
        let sorter = null
        let globalIndex = 0
        function bubbleSort(arr) {
            const states = []
            const n = arr.length
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                        states.push([arr[j], arr[j + 1], 'swap']);
                    } else {
                        states.push([arr[j], arr[j + 1], 'no-swap']);
                    }

                }
            }
            return states
        }
        function htmlToElement(html) {
            var template = document.createElement('template');
            html = html.trim(); // Never return a text node of whitespace as the result
            template.innerHTML = html;
            return template.content.firstChild;
        }

        function createArray(e) {
            e.preventDefault()
            const numbers = document.getElementById('numbers_input').value
            const numbersArray = numbers.split(',').map(num => parseInt(num.trim(), 10)).filter(num => Number.isInteger(num))
            globalNumbers = numbersArray
            sorter = null
            globalIndex = 0
            const main = document.getElementById('numbers-display')
            main.innerHTML = ''
            main.appendChild(htmlToElement(createArrayMarkup(numbersArray)))
        }
        function createArrayMarkup(array) {
            const els = array.map((num, idx) => `<div class="num num-${idx}" data-val="${num}" style="width:14px;height:${num * 16}px;order:${idx + 1}">${num}</div>`)
            els.push('</div>')
            els.unshift('<div class="num-holder">')
            return els.join("")
        }

        function next() {
            if (sorter === null) {
                sorter = bubbleSort(globalNumbers)
            }
            const k = sorter[globalIndex]
            globalIndex++
            console.log(k);
            if (k) {
                const [p, q, r] = k
                    if (r !== 'no-swap') {
                        updateDisplayArray(p, q)
                    }
                    tempHighlight(p, q)
                }
        }

        function updateDisplayArray(p, q) {
            const r = document.querySelector(`[data-val="${p}"]`)
            const s = document.querySelector(`[data-val="${q}"]`)
            const temp = r.style.order
            r.style.order = s.style.order
            s.style.order = temp
        }
        function tempHighlight(p, q) {
            const r = document.querySelector(`[data-val="${p}"]`)
            const s = document.querySelector(`[data-val="${q}"]`)
            r.style.border = s.style.border = '2px solid black'
            setTimeout(() => {
                r.style.border = s.style.border = ''
            }, 100)
        }
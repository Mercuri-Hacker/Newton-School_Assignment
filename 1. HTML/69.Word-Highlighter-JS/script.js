function highlight() {
    const paraEl = document.querySelector('#paragraph-input')
    const wordEl = document.querySelector('#word-input')
    const wordCounterEl = document.querySelector('#words-counter')
    const shouldMatchLowerCase = document.querySelector('#ignore-case').checked
    if(!wordEl.value) return;
    let newParaElText = ''
    let i = 0
    if (shouldMatchLowerCase) {
        const reg = new RegExp(wordEl.value,'ig')
        newParaElText = paraEl.innerText.replaceAll(reg, (args) => {
            i++;
            return `<span class="highlighted-txt">${args}</span>`
        })
    }else{
        newParaElText = paraEl.innerText.replaceAll(wordEl.value, (args) => {
            i++;
            return `<span class="highlighted-txt">${args}</span>`
        })
    }

    paraEl.innerHTML = newParaElText
    wordCounterEl.innerText = i
}
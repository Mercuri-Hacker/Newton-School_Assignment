function changeHandler() {
    // document.querySelector("`#${colorid}`").style.background=`${color}`
    var divs = document.querySelectorAll("div")
    divs.forEach(function findTarget(div) {
        if (div.getAttribute("id") == colorid) {
            div.style.background = color

        }
        else {
            div.style.background = "none"

        }
    })

}
function resetHandler() {
    var divs = document.querySelectorAll("div")

    divs.forEach(function findTarget(div) {

        div.style.background = "none"


    })
}
var coloridvalue = document.querySelector("#wall_id")
var colorid
var colorvalue = document.querySelector("#wall_color")
var color
colorvalue.addEventListener('input', updateValuecolour);
coloridvalue.addEventListener('input', updateValueid);
function updateValueid(e) {
    colorid = e.target.value;
}
function updateValuecolour(e) {
    color = e.target.value;
}
function updateHeading() {
    let head3 = document.getElementById('url');
    head3.innerText = 'https://localhost:8080/';
    let fName = document.getElementById('name');
    let year = document.getElementById('year');
    if(fName.value === "" && year.value === "")
        return;
    else if(year.value === "")
        head3.innerText += '?' + 'name=' + fName.value;
    else if(fName.value === "")
        head3.innerText += '?' + 'year=' + year.value;
    else
        head3.innerText += '?' + 'name=' + fName.value + '&year=' + year.value;
    fName.value = "";
    year.value = "";
}
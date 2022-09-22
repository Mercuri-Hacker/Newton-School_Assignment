const imgSrc = [
    "https://gamedata.britishcouncil.org/sites/default/files/attachment/number-8_1.jpg",    
    "https://cdn.jjkeller.com/wcsstore/CVCatalogAssetStore/images/product/1000x1000/2297.jpg",    
    "https://www.wtbtraffic.com/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/3/5/352snw-_2964_.jpg",    
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMbGV1ULD1u_9RUWErypD7livA2msWnb5Xw&usqp=CAU",    
    "https://images-na.ssl-images-amazon.com/images/I/31JniuDxNBL.jpg",    
    "https://images-na.ssl-images-amazon.com/images/I/31JNiTM00pL.jpg"
]
function allowDrop(ev) {  
    ev.preventDefault();
}
function drag(ev) {  
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
    ev.preventDefault();
    let data1 = ev.dataTransfer.getData("text");

    let src = event.target.src;
    let id = event.target.id;
    let img1 = document.getElementById(data1);
    event.target.id = img1.id;
    event.target.src = img1.src;
    img1.id = id;
    img1.src = src;
}

function loadImgs(){
    for(let i=0; i<6; i++){
        const newImg = document.createElement("img");
        const currDivId = "div" + (i+1);
        const currImgId = "drag"+ (i+1);
        const currDiv = document.getElementById(currDivId);
        console.log(currDiv);
        newImg.setAttribute("src", imgSrc[i]);
        newImg.setAttribute("id", currImgId);
        newImg.setAttribute("draggable", "true");
        newImg.setAttribute("ondragstart", "drag(event)");

        currDiv.appendChild(newImg);
    }
}

loadImgs();
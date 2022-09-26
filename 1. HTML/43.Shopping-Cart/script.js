// function insertItem() {



// }
let tableHeading = document.createElement('tr');

tableHeading.innerHTML ='<th> Sr. No.</th><th> Title</th><th> price</th>'

var dataHolder=[];

function submitItem(){
    if(document.getElementById('item-name-input').value !== ""){
      if(document.getElementById('item-price-input').value !== ""){
        dataHolder.push({index:dataHolder.length,name: document.getElementById('item-name-input').value ,
          price:document.getElementById('item-price-input').value});
            document.getElementById('item-name-input').value = "";
            document.getElementById('item-price-input').value =""
            document.getElementsByTagName('table')[0].innerHTML=" "
            document.getElementsByTagName('table')[0].appendChild(tableHeading);
              for(let i=0;i <dataHolder.length;i++){
                  console.log("dataHolder[i]",dataHolder[i])
                    document.getElementsByTagName('table')[0].appendChild(CreateRow(dataHolder[i]));
              }
          document.getElementsByTagName('table')[0].appendChild(total(dataHolder));
    }
  }
}
function total(data){
    let tot =0;
    for(let i =0; i<data.length;i++)
    {
       tot=tot+ parseInt(data[i].price);
    }
    let returnData = document.createElement('tr')
    returnData.innerHTML = '<td> Grand Total </td> <td data-ns-test="grandTotal">' +tot + '</td>';
    return returnData;
}
function CreateRow(data){
    let tableRow = document.createElement('tr');
    tableRow.innerHTML = '<td>' + data.index +'</td> <td data-ns-test="item-name">'
    + data.name +'</td> <td data-ns-test="item-price">' + data.price + '</td>';
    return tableRow;
}
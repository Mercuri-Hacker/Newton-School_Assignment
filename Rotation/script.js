let flag=1;
function rotateBox(){
if(flag == 1){
    document.getElementById('box').style.transform = 'rotate(180deg)';
    flag = 0;
}
else{
    document.getElementById('box').style.transform = 'rotate(0deg)';
    flag = 1;
}
}
document.getElementById("mybtn").addEventListener ("click" ,() =>{
    var num1= document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = parseFloat(num1) +parseFloat(num2);
    
    document.getElementById('result').value=result;
    
        
    })
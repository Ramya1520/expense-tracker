function handleTransaction(input)
 {  
   var totalAmount = document.getElementById("demo").innerText;
   var enterAmount = document.getElementById("inputbox").value;
   var addvalue = parseInt(totalAmount) +  parseInt(enterAmount);
   var subvalue =parseInt(totalAmount) - parseInt(enterAmount);
  let result = (input == true) ? addvalue: subvalue;
    document.getElementById("demo").innerHTML = result;
    
 }
   



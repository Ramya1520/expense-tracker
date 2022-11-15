//  var amount=document.getElementById("demo").innerHTML;
//  var amounts=document.getElementById("demo").value;
//   var z=document.getElementById("addition").value;
//  var z=document.getElementById("sub").value;

// //     document.getElementById("demo").innerHTML=z;

//     alert("this is ramya");


//     let x=1000;
function handlePlusTransaction(){
   var totalAmount = document.getElementById("demo");
   var enteredAmount = document.getElementById("inputbox").value;
    document.getElementById("demo").innerHTML = parseInt(totalAmount.innerHTML) + parseInt(enteredAmount);
}


function handleMinusTransaction(){
    var totalamount =document.getElementById("demo");
    var enteredAmount = document.getElementById("inputbox").value;
    document.getElementById("demo").innerHTML = parseInt(totalamount.innerHTML)-parseInt(enteredAmount);
}

    



function transaction(input) {
    alert("hai");
   var x= document.getElementById("demo").innerHTML;
   var y= document.getElementById("num").value;

   var add= parseInt(x) + parseInt(y);
   var sub= parseInt(x) - parseInt(y);
   let operation = (input==true)? add:sub;
   
   var table = document.getElementById("myTable");
   var row = table.insertRow();
   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);

    if(operation==add){
        cell1.innerHTML = "Credited";
    }
    else{
          cell1.innerHTML = "Debited";
    }
    cell2.innerHTML = y;
    cell3.innerHTML=document.getElementById("demo").innerHTML=operation;

 }
 myFunction();
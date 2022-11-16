var arr=[];
function transaction(input) {
   var x= document.getElementById("demo").innerHTML;
   var y= document.getElementById("num").value;
   var z= document.getElementById("spends").value
   const d =new Date();
   var add= parseInt(x) + parseInt(y);
   var sub= parseInt(x) - parseInt(y);
   let operation = (input==true)? "credit":"debit";
   let operations = (input==true)? add:sub;  
    let transctiondetails={};
    transctiondetails.amount=document.getElementById("num").value;
   
    transctiondetails.balance=operations;
    transctiondetails.type=operation;
    transctiondetails.spend=document.getElementById("spends").value;
    transctiondetails.date=d;
    console.log(transctiondetails);
    arr.push(transctiondetails);
    console.log(arr);
    }

function gnrt(){
    var table = document.getElementById("myTable");
    for(i=0;i<arr.length;i++){
        console.log(arr[i],i);
        //let operation=(input==true)?add:sub;

        var row = table.insertRow();

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
      
       cell1.innerHTML = arr[i].type;
       cell2.innerHTML = arr[i].amount;
       cell3.innerHTML= arr[i].balance;
       cell4.innerHTML = arr[i].spend;
       cell5.innerHTML = arr[i].date;

       table.appendChild(row)
     }
    
    }
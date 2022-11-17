var arr=[];
var a=[];
var operation;
var d = []

function transaction(input) {
   var x= document.getElementById("demo").innerHTML;
   var y= document.getElementById("num").value;
   var z= document.getElementById("spends").value
   const d =new Date();
   var add= parseInt(x) + parseInt(y);
   var sub= parseInt(x) - parseInt(y);
   document.getElementById('last_click').value=input;

   let operation = (input=='credit')? "credit":"debit";
   let operations = (input=='credits')? add:sub;  
    let transctiondetails={};
    transctiondetails.amount=document.getElementById("num").value;
   
    transctiondetails.balance=operations;
    transctiondetails.type=operation;
    transctiondetails.spend=document.getElementById("spends").value;
    transctiondetails.date=d;
    console.log(transctiondetails);
    arr.push(transctiondetails);


    }

function gnrt(){
    document.getElementById("myTable").innerHTML = "";

    var table = document.getElementById("myTable");
    var type =  document.getElementById("last_click").value;
    for(i=0;i<arr.length;i++){
        // console.log(arr[i],i);
        // console.log("operation")
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
       if(arr[i].type=='credit'){
           // console.log(a)
           d.push(arr[i])
           
           console.log(d[0])
           console.log("---------------------------")

           a.push('transctiondetails')
           console.log(a)
       }
       else if((type=='debit')){
           console.log("hai");
       }
     }

     console.log(d,"d")
    }


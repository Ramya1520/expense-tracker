
var trans=[];
var d=[];
var a;


var button = document.createElement('button');
function add(value){
    const date=new Date();
    var initialamount=document.getElementById("initial amount").innerHTML;
    var amount=document.getElementById("amount").value;
   
    var notes=document.getElementById("notes").value;
    var type=document.getElementById("select").value;
    var credit=parseInt(initialamount)+parseInt(amount);
    var debit=parseInt(initialamount)-parseInt(amount);
    var type = (value==='credit') ? "credit" : "debit";
    let balance = (value==='credit')? credit:debit;
    document.getElementById("initial amount").innerHTML=balance;
    var id = Number(document.getElementById("p_id").value);

    transactionsdetail={}
    transactionsdetail.amount=amount;
    transactionsdetail.notes=notes;
    transactionsdetail.type=type;
    transactionsdetail.balance=balance;
    transactionsdetail.date=date.toLocaleTimeString();
    console.log(transactionsdetail.id);
    document.getElementById("p_id").value = id + 1
    var arr=[];
    trans.push(transactionsdetail);
    console.log(trans);
    var amount=document.getElementById("amount").value=" ";
    var amount=document.getElementById("notes").value=" ";

 }
// function transaction(val){
//    const date=new Date();
//    var initialamount=document.getElementById("initial amount").innerHTML;
//     var amount=document.getElementById("amount").value;
//     var notes=document.getElementById("notes").value;
//     var credit=parseInt(initialamount)+parseInt(amount);
//     var debit=parseInt(initialamount)-parseInt(amount);
//     var type = (val==='credit') ? "credit" : "debit";
//     let balance = (val==='credit')? credit:debit;
//     if(type == 'credit'){
//         var credit=parseInt(initialamount)+parseInt(amount);
//     }
//     else if(type == 'debit'){
//         var debit=parseInt(initialamount)-parseInt(amount);
//     }
//     document.getElementById("initial amount").innerHTML=balance;
//     var id = Number(document.getElementById("p_id").value);
//     transactionsdetails={}
//     transactionsdetails.id=id;
//     transactionsdetails.type=type;
//     transactionsdetails.amount=amount;
//     transactionsdetails.notes=spend;
//     transactionsdetails.balance=balance;
//     transactionsdetails.date=date.toLocaleTimeString();
//     console.log(transactionsdetails.id);
//     document.getElementById("p_id").value = id + 1

    //proxy
//     console.log(transactionsdetails);
//     let handler={
//         get:function(targetElement,prop){
//             return targetElement[prop];
//         },
//         set:function(targetElement,prop,value){
//             if(type == 'credit'){
//             targetElement[prop]=value;
//             }
//         }
//     }
//     transactionsdetails=new Proxy(transactionsdetails,handler);
//     transactionsdetails.type="amount credited";
//     console.log(transactionsdetails.type);
//     arr.push(transactionsdetails);
//     console.log("==",arr);
// }
function generate() {
    document.getElementById("myTable").innerHTML = "";
    var table = document.getElementById("myTable");
    var type =  document.getElementById("last_click").value;
    for(i=0;i<arr.length;i++){
    
        console.log(arr[i]);
        if(arr[i].type=='amount credited'){
            d.push(arr[i])
        }
        else if((type=='debit')){
            console.log("hai");
        }
        
        var btn = document.createElement("INPUT")
        btn.innerHTML="delete"
        btn.value= "Delete"
        btn.type="button"
        btn.className ="dlt-cls"
        
//         var row = table.insertRow();
//         var cell1 = row.insertCell(0);
//         var cell2 = row.insertCell(1);
//         var cell3 = row.insertCell(2);
//         var cell4 = row.insertCell(3);
//         var cell5 = row.insertCell(4);
//         var cell6 = row.insertCell(5).appendChild(btn);

//         btn.setAttribute("id","btn-"+i)
//         btn.addEventListener("click",deleteRow);

        
//         cell1.innerHTML = arr[i].type;
//         cell2.innerHTML = arr[i].amount;
//         cell3.innerHTML= arr[i].balance;
//         cell4.innerHTML = arr[i].spend;
//         cell5.innerHTML = arr[i].date;
//         cell6.innerHTML = btn.innerHTML="delete"       
//     }
// //delete

//     function deleteRow(event){
//         var indexToDelete = event.target.id.split("-")[1];
//         console.log("before",arr)
//         arr.splice(indexToDelete,1);
//         console.log("after",arr)
//         generate()
//     }

    

    }}
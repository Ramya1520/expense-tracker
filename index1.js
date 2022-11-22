var arr=[];
var d=[];
var a;
var button = document.createElement('button');
function transaction(input){
    const date=new Date();
    var initialamount=document.getElementById("initial amount").innerHTML;
    var amount=document.getElementById("amount").value;
    var spend=document.getElementById("spend").value;
    var credit=parseInt(initialamount)+parseInt(amount);
    var debit=parseInt(initialamount)-parseInt(amount);
    var type = (input=='credit')? "credit":"debit";
    let balance = (input=='credit')? credit:debit;
    document.getElementById("initial amount").innerHTML=balance;

    transactionsdetails={}
        transactionsdetails.type=type;
        transactionsdetails.amount=amount;
        transactionsdetails.spend=spend;
        transactionsdetails.balance=balance;
        transactionsdetails.date=date.toLocaleTimeString();
//proxy
    console.log(transactionsdetails);
    let handler={
        get:function(targetElement,prop){
        return targetElement[prop];
    },
    set:function(targetElement,prop,value){
        if(type == 'credit'){
        targetElement[prop]=value;
}
}
}

transactionsdetails=new Proxy(transactionsdetails,handler);
transactionsdetails.type="amount credited";
console.log(transactionsdetails.type);
arr.push(transactionsdetails);
console.log("==",arr);
}


function generate()
{
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
        var btn = document.createElement("BUTTON");
        var a=btn.innerHTML="delete";
            console.log(btn);
        var row = table.insertRow();	
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4); 
        var cell6=row.insertCell(5).appendChild(btn);
        cell1.innerHTML = arr[i].type;
        cell2.innerHTML = arr[i].amount;
        cell3.innerHTML= arr[i].balance;
        cell4.innerHTML = arr[i].spend;
        cell5.innerHTML = arr[i].date;
        cell6.innerHTML =  a;
        }
}


















function creditTime()
{
    const d = new Date();
    document.getElementById("lastCreditTime").innerHTML ="creditime"+ d.toLocaleTimeString();
}
    let currentTime=setInterval(myTimer, 1000);
function myTimer()
{
    const d = new Date();
    document.getElementById("timer").innerHTML = "Time:" +d.toLocaleTimeString();
}






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
    var id = Number(document.getElementById("p_id").value);
    transactionsdetails={}
        
        transactionsdetails.id=id;
        transactionsdetails.type=type;
        transactionsdetails.amount=amount;
        transactionsdetails.spend=spend;
        transactionsdetails.balance=balance;
        transactionsdetails.date=date.toLocaleTimeString();
        console.log(transactionsdetails.id);
        document.getElementById("p_id").value = id + 1
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
        
        var btn = document.createElement("BUTTON")
        btn.innerHTML="delete"
        
        var row = table.insertRow();
        	
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        
        var cell6 = row.insertCell(5).appendChild(btn);
        btn.setAttribute("id","btn-"+i)
        btn.addEventListener("click",console.log("tet"));

        
        cell1.innerHTML = arr[i].type;
        cell2.innerHTML = arr[i].amount;
        cell3.innerHTML= arr[i].balance;
        cell3.innerHTML = arr[i].spend;
        cell4.innerHTML = arr[i].date;
        // cell5.innerHTML = btn.innerHTML="delete"
            
    }
      
    function deleteRow(row) {
      console.log(row);
       
        // var i = row.parentNode.parentNode.rowIndex;
        // document.getElementById("myTable").deleteRow(i);
    }    


    // {id: 1, type: 'debit', amount: '2', spend: 'sa', balance: 998, date: '1:24:01 PM'}
    // {id: 2, type: 'debit', amount: '2', spend: 'sa', balance: 998, date: '1:24:01 PM'}

























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





}
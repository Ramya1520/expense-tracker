var arr=[];
var d=[];
function transaction(input){
const date=new Date();
var initialamount=document.getElementById("initial amount").innerHTML;
var amount=document.getElementById("amount").value;
var spend=document.getElementById("spend").value;
var credit=parseInt(initialamount)+parseInt(amount);
var debit=parseInt(initialamount)-parseInt(amount);
var type = (input=='credit')? "credit":"debit";
let balance = (input=='credit')? credit:debit;
document.getElementById("initial amount").innerHTML =balance;
transactionsdetails={}
transactionsdetails.type=type;
transactionsdetails.amount=amount;
transactionsdetails.spend=spend;
transactionsdetails.balance=balance;
transactionsdetails.date=date;
arr.push(transactionsdetails);
//alert(transactionsdetails.balance);
console.log(arr);
}
function generate(){
document.getElementById("myTable").innerHTML = "";
var table = document.getElementById("myTable");
var type =  document.getElementById("last_click").value;
for(i=0;i<arr.length;i++){
console.log(arr[i]);
if(arr[i].type=='credit'){
d.push(arr[i])
}
else if((type=='debit')){
console.log("hai");
}
}
for(i=0;i<d.length;i++){
var row = table.insertRow();	
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);                                                   
cell1.innerHTML = d[i].type;
cell2.innerHTML = d[i].amount;
cell3.innerHTML= d[i].balance;
cell4.innerHTML = d[i].spend;
cell5.innerHTML = d[i].date;
}
d=[];
}
function creditTime() {
const d = new Date();
document.getElementById("lastCreditTime").innerHTML ="creditime"+ d.toLocaleTimeString();
}
let currentTime=setInterval(myTimer, 1000);
function myTimer() {
const d = new Date();
document.getElementById("timer").innerHTML = "Time:" +d.toLocaleTimeString();
}

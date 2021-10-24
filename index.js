
function calculate()
{
if(document.loan.amt.value==null ||
 document.loan.amt.value.length==0 ||
 document.loan.mon.value==null ||
 document.loan.mon.value.length==0 || 
 document.loan.rate.value==null || 
 document.loan.rate.value.length==0 ) 
{
document.loan.payment1.value='Data Reqd.'
}else
 {
var payment1='';
var princ1= document.loan.amt.value;
var term1= document.loan.mon.value;
var intr1=document.loan.rate.value / 1200;
document.loan.payment1.value =Math.round(princ1 * intr1 / (1-(Math.pow(1/(1 + intr1), term1)))*100)/100; 
document.loan.totpay1.value= Math.round((document.loan.payment1.value * document.loan.mon.value)*100)/100;
document.loan.totint1.value=Math.round((document.loan.totpay1.value*1 - document.loan.amt.value*1)*100)/100;
}
}
function reset(){
}
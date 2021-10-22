var hr=0;
var min=0;
var sec=0;
var timer=false;

//For start button.
function start() {
  timer=true;
  stopwatch();
}

//For stop button.
function stop() {
  timer=false;
}

//For clear button.
function reset() {
  timer=false;
  hr=0;
  min=0;
  sec=0;

  document.getElementById("hr").innerHTML="00";
  document.getElementById("min").innerHTML="00";
  document.getElementById("sec").innerHTML="00";
}

//For values in stopwatch.
function stopwatch() {
  var x =document.getElementById("limit").value;
  if (timer == true){
    sec=sec+1;

    if (sec == 60) {
      min=min+1;
      sec=0;
    }
    if (min == 60){
      hr=hr+1;
      min=0;
      sec=0;
    }

    var hrString=hr;
    var minString=min;
    var secString=sec;

    if (hrString < 10) {
      hrString="0"+hrString;//converting single digit into double digit
    }
    if (minString < 10) {
      minString="0"+minString;//converting single digit into double digit
    }
    if (secString < 10) {
      secString="0"+secString;//converting single digit into double digit
    }
    
    //to stop at the given limit.
    if(""+min == ""+x){
      stop();
    }

    document.getElementById("hr").innerHTML=hrString;
    document.getElementById("min").innerHTML=minString;
    document.getElementById("sec").innerHTML=secString;
    setTimeout("stopwatch()",1000);
  }
}

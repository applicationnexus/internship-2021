function myFunction(){
  var a = document.getElementById("rupees").value;
  var x =document.getElementById("country").value;
  var o;
  if (a ==null || a == undefined || a.length==0)
  {
    alert("Please enter a value..")
  }
  else{
  switch(x)
  {
    case "USD":
      o = a*74.99;
      alert("The Converted Currency is:\n" +o);
      break;

    case "EUR":
      o = a*87.32;
      alert("The Converted Currency is:\n" +o);
      break;
      
    case "AUD":
      o = a*55.97;
      alert("The Converted Currency is:\n" +o);
      break;
      
    case "JPY":
      o = a*0.66;
      alert("The Converted Currency is:\n" +o);
      break;
      
    case "CAD":
    o = a*60.65;
    alert("The Converted Currency is:\n" +o);
        break;
  }
}
  }

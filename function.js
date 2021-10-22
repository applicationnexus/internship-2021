
function myfunction()
{
 let a =document.getElementById("a");
 var start=Number(a.value);
 let b=document.getElementById("b");
 var n=Number(b.value); 
// console.log(start,n);
let string = "";
// External loop(for number of rows)
for (let i = start ; i <= start+n-1; i++) 
{
        // printing spaces(begining)
        for (let j = 1; j <= start+ n - i; j++) 
        {
          string += "&nbsp&nbsp";
        }
  
        // printing star(first pattern star)
        for (let k = start; k < 2 *i; k++) 
        {
          string += "*";
        }
  
        //printing spaces(first pattern after)
        for (let j = 1; j <= start+ n - i; j++) 
        {
          string += "&nbsp&nbsp";
        }
  
        //printing spaces(second pattern begining)
        for (let j = 1; j <= start+ n - i; j++) 
        {
          string += "&nbsp&nbsp";
        }
  
        //printing star (second pattern)
        for (let k = start; k < 2 *i; k++) 
        {
          string += "*";
        }
  
        //new line 
          string += "<br>";
}
//console.log(string);
document.write(string);

}

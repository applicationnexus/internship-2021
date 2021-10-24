// Introduction
// WhatYouShouldKnow
// JavaScriptAndJava
// HelloWorld
// Variables
// DeclaringVariables
// VariableScope

var divs = ["Introduction","WhatYouShouldKnow","JavaScriptAndJava","HelloWorld","Variables","DeclaringVariables","VariableScope"];
var visibleId = null;
function toggleInfo(divId) {
    if(visibleId !== divId) {
        visibleId = divId;
    }
    hide();
}

function hide(){
    var id,i,div;
    for(i=0;i<divs.length;i++){
        id = divs[i];
          div = document.getElementById(id);
          if(visibleId === id) {
            div.style.display = "block";
          } else {
            div.style.display = "none";
          }
    }
}


































    // switch (params) {
    //     case 'Introduction':
    //         document.getElementById("Introduction").style.visibility = "visible";
    //       break;
    //     case 'WhatYouShouldKnow':
    //         document.getElementById("WhatYouShouldKnow").style.visibility = "visible";
    //       break;
    //     case 'JavaScriptAndJava':
    //       document.getElementById("JavaScriptAndJava").style.visibility = "visible";
    //       break;
    //     case 'HelloWorld':
    //       document.getElementById("HelloWorld").style.visibility = "visible";
    //       break;
    //     case 'Variables':
    //       document.getElementById("Variables").style.visibility = "visible";
    //       break;
    //     case 'DeclaringVariables':
    //       document.getElementById("DeclaringVariables").style.visibility = "visible";
    //       break;
    //     case 'VariableScope':
    //       document.getElementById("VariableScope").style.visibility = "visible";
    //       break;
    //     default:
    //         document.getElementById("Introduction").style.visibility = "visible";
    //   }

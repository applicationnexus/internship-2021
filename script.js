function getInputValue(){ 
    var kb,mb,gb,tb;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var ipval = document.getElementById("ipval").value;
    var conversion = document.getElementById("conversion");
    console.log(from);
    console.log(to);
    console.log(ipval);
    conversion.value = 123;          
    
    if(from == "Kilobytes(KB)" && to == "Kilobytes(KB)"){
        kb = ipval;
        conversion.value = kb; 
    }
    else if(from == "Kilobytes(KB)" && to == "Megabytes(MB)"){
        mb = ipval/1000;
        conversion.value = mb;
    }
    else if(from == "Kilobytes(KB)" && to == "Gigabytes(GB)"){
        gb = ipval/1000000;
        conversion.value = gb;
    }
    else if(from == "Kilobytes(KB)" && to == "Terabytes(TB)"){
        tb = ipval/1000000000;
        conversion.value = tb;
    }



    else if(from == "Megabytes(MB)" && to == "Megabytes(MB)"){
        mb = ipval;
        conversion.value = mb; 
    }
    else if(from == "Megabytes(MB)" && to == "Kilobytes(KB)"){
        kb = ipval * 1000;
        conversion.value = kb;
    }
    else if(from == "Megabytes(MB)" && to == "Gigabytes(GB)"){
        gb = ipval/1000;
        conversion.value = gb;
    }
    else if(from == "Megabytes(MB)" && to == "Terabytes(TB)"){
        tb = ipval/1000000;
        conversion.value = tb;
    }



    else if(from == "Gigabytes(GB)" && to == "Gigabytes(GB)"){
        gb = ipval;
        conversion.value = gb; 
    }
    else if(from == "Gigabytes(GB)" && to == "Kilobytes(KB)"){
        kb = ipval * 1000000;
        conversion.value = kb;
    }
    else if(from == "Gigabytes(GB)" && to == "Megabytes(MB)"){
        mb = ipval * 1000;
        conversion.value = mb;
    }
    else if(from == "Gigabytes(GB)" && to == "Terabytes(TB)"){
        tb = ipval/1000;
        conversion.value = tb;
    }



    else if(from == "Terabytes(TB)" && to == "Terabytes(TB)"){
        tb = ipval;
        conversion.value = tb; 
    }
    else if(from == "Terabytes(TB)" && to == "Kilobytes(KB)"){
        kb = ipval * 1000000000;
        conversion.value = kb;
    }
    else if(from == "Terabytes(TB)" && to == "Megabytes(MB)"){
        mb = ipval*1000000;
        conversion.value = mb;
    }
    else if(from == "Terabytes(TB)" && to == "Gigabytes(GB)"){
        tb = ipval*1000;
        conversion.value = tb;
    }


    

    else{

         alert("please select proper type! or please check the correct input value( Is It integer or not)!!! ");
    }
    
}
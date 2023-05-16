let display = document.getElementById("screen");


function allclr(){
    display.value = ""
}

function collect(n){
    display.value += n   
}
function total(){
    display.value = eval(display.value)    
}
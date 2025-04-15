 

 const display = document.getElementById("display");

 function appendToDislay(input){
    display.value += input;
 }

 function eraseDisplay(input){
    display.value = display.value.slice(0, -1);
 }
 
 function clearDisplay(){
    display.value = "";
 }

 function calculate(){
    try {
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}




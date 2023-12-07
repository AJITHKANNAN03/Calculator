var display=document.querySelector(".screen");
function cal(num){
    display.value+=num;
}
function equal(){
    try{
        display.value=eval(display.value);
    }
    catch(err){
        alert("Invalid");
    }
}
function clearAll(){
    display.value= "";
}
function del(){
    display.value=display.value.slice(0,-1);
}
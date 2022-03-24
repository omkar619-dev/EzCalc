let output = 0;
function operate(a,b,op){
    
    switch(op){
        case '+':       
        output = +a + +b;
        break;

        case '-':
            output = a-b;
            break;

        case '*':
            output = a*b;
            break;

        case '/':
            if(b===0){
                return "Nah can't do!";
            }else{
                output = a/b;
            }
            break;
    }
    return output;
}

let btn_dec = document.querySelector('.btndec');
btn_dec.addEventListener("click",function(){
  let x = document.querySelector('.display');
  x.value += ".";
});

let btn_0 = document.querySelector('.btn0');
btn_0.addEventListener("click",function(){
  let x = document.querySelector('.display');
  x.value += "0";
});

let btn_1 = document.querySelector('.btn1');

btn_1.addEventListener("click",function(){
 let x = document.querySelector('.display');
 x.value += "1";
 
});

let btn_2 = document.querySelector('.btn2');

btn_2.addEventListener("click",function(){
let x = document.querySelector('.display');
  x.value += "2";
});

let btn_3 = document.querySelector('.btn3');

btn_3.addEventListener("click",function(){
let x = document.querySelector('.display');
  x.value += "3";
});

let btn_4 = document.querySelector('.btn4');

btn_4.addEventListener("click",function(){
let x = document.querySelector('.display');
  x.value += "4";
});

let btn_5 = document.querySelector('.btn5');

btn_5.addEventListener("click",function(){
let x = document.querySelector('.display');
  x.value += "5";
});

let btn_6 = document.querySelector('.btn6');

btn_6.addEventListener("click",function(){
let x = document.querySelector('.display');
  x.value += "6";
});

let btn_7= document.querySelector('.btn7');

btn_7.addEventListener("click",function(){
let x = document.querySelector('.display');
  x.value += "7";
});

let btn_8 = document.querySelector('.btn8');

btn_8.addEventListener("click",function(){
let x = document.querySelector('.display');
  x.value += "8";
});

let btn_9 = document.querySelector('.btn9');

btn_9.addEventListener("click",function(){
let x = document.querySelector('.display');
  x.value += "9";
});

let btn_cl = document.querySelector('.btncl');
btn_cl.addEventListener("click",function(){                     
let x = document.querySelector('.display');
  x.value = "";
});

let btn_dl = document.querySelector('.btndl');
btn_dl.addEventListener("click",function(){                     /*delete means backspace here*/
let x = document.querySelector('.display');
  let c = x.value;
  let q = c.split("");
  q.pop();
  console.log(q);
  x.value = q.join("");
});

let oper;
let num1;
let num2;

let btn_plus = document.querySelector('.btnplus');
btn_plus.addEventListener("click",() => {
let x = document.querySelector('.display');
num1 = x.value;

x.value = " "
oper = document.querySelector('.btnplus');
console.log(num1);
});

let btn_min = document.querySelector('.btnmin');
btn_min.addEventListener("click",() => {
let x = document.querySelector('.display');
num1 = x.value;

x.value = " "
oper = document.querySelector('.btnmin')
console.log(num1);
});

let btn_div = document.querySelector('.btndiv');
btn_div.addEventListener("click",() => {
let x = document.querySelector('.display');
num1 = x.value;

x.value = " "
oper = document.querySelector('.btndiv')
console.log(num1);
});

let btn_mult = document.querySelector('.btnmult');
btn_mult.addEventListener("click",() => {
let x = document.querySelector('.display');
num1 = x.value;

x.value = " "
oper = document.querySelector('.btnmult')
console.log(num1);
});


let btn_eq = document.querySelector('.btneq');
btn_eq.addEventListener("click",() => {
let x = document.querySelector('.display');
 num2 = x.value;
console.log(num2);


operate(num1,num2,oper.value);
x.value = output;
});

window.addEventListener('keydown',function(e){
 console.log(e.key);
 let pr = document.querySelector('.display');
 pr.value += e.key;
})
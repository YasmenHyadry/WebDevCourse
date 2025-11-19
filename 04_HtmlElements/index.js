document.addEventListener("DOMContentLoaded", () => {

    pageLoaded();
}
    //...
);

let txt1;
let txt2;
let btn;
let lblRes;
function pageLoaded() {
    txt1 = document.getElementById('txt1');
    txt2 = document.querySelector('#txt2');// we would get the same result idf we did like txt1 
    btn = document.getElementById('btnCalc');
    lblRes = document.getElementById('lblres');
    btn.addEventListener('click', () => {
        calculate();
    })


}
function calculate() {
    let txt1Text = txt1.value;
    let num1 = parseInt(txt1Text);

    let txt2Text = txt2.value;
    let num2 = parseInt(txt2Text);

    let res = num1 + num2;
    lblRes.innerText = res;


}



const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    print("btn2 clicked:" + btn2.id + " | " + btn2.innerText); // this example of callback

});

btn2.addEventListener("click", func1());

//function func1(){

//}


function print(msg) {

    // get TextArea element reference
    const ta = document.getElementById("output");
    // write message to TextArea text
    if (ta) ta.value = msg;
    else console.log(msg);
}



// =============================================
// STEP 1: JS NATIVE TYPES, USEFUL TYPES & OPERATIONS
// =============================================
function demoNative() {
    let out = "=== STEP 1: NATIVE TYPES ===\n";

    // String
    const s = "Hello World";
    out += "\n[String] s = " + s;
    out += "\nLength: " + s.length;
    out += "\nUpper: " + s.toUpperCase();

    // Number
    const n = 42; // const means const is constant!  -- we can also write n=0.24 for example 
    out += "\n\n[Number] n = " + n;

    // Boolean
    const b = true;
    out += "\n\n[Boolean] b = " + b;

    // Date
    const d = new Date();
    out += "\n\n[Date] now = " + d.toISOString();

    // Array
    const arr = [1, 2, 3, 4]; // we can also add strings arr.push('x')
    out += "\n\n[Array] arr = [" + arr.join(", ") + "]";
    out += "\nPush 5 → " + (arr.push(5), arr.join(", "));
    out += "\nMap x2 → " + arr.map(x => x * 2).join(", ");// map כמו lambda

    // Functions as variables
    const add = function (a, b) { return a + b; }; // like normal function
    out += "\n\n[Function as variable] add(3,4) = " + add(3, 4);

    // Callback
    function calc(a, b, fn) { return fn(a, b); }// func calls another func 
    const result = calc(10, 20, (x, y) => x + y);
    out += "\n[Callback] calc(10,20, x+y ) = " + result;

    // print to log
    print(out);
}
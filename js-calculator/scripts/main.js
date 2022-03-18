'use strict';

function show(numb) {
    document.getElementById("button").value += numb;
    console.log(numb);
    return numb;
}

function solve() {
    let x = document.getElementById('button').value
    //    let y = eval(x);
    document.getElementById('button').value = y + +x;
    console.log(x, y);
    return y;
}
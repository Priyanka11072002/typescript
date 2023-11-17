"use strict";
//void type :when function and variable don't return any value , only store value in variable insinde function
let date;
let interger;
function api() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => console.log(json));
}
function voidtypescript() {
    date = new Date();
    interger = Math.round(5);
    const apicall = api();
}
voidtypescript();

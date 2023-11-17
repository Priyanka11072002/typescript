var annonyomous = function () {
    console.log('browser keep store name of fun when we call fun , it passed the fun with line no.');
};
annonyomous();
//we will create fun which does not have name is called annonyomous fun 
//need : when we don't need to store fun name in  browser of js complier ,need data at once time only after some sec
//function expresion :when we pass annonymous fun into the variable , variable becomes like expression is called function expression
var funexpression = function () { console.log("function expresion :when we pass annonymous fun into the variable , variable becomes like expression is called function expression"); };
// console.log(funexpression(),'funexpression')
funexpression();
//function expresion :when we pass annonymous fun into the variable , variable becomes like expression is called function expression
//need data at once time only after some sec
setTimeout(function () {
    console.log("need data at once time only after some sec");
}, 1000);
//need data at once time only after some sec

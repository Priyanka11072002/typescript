"use strict";
//never type :when we use when we know before , we will get error , do don't brek entire code will runtime , that's why using never type
function nevetypescript(error, errortype) {
    //    console.log('hello typescript complier') 
    //    console.log('i have learnt how to setup typescript') 
    throw { error: error, errortype: errortype };
}
console.log(nevetypescript("network error", 400));



//closure : closure is a function ,a function return innerfunction this fun should store in the variable , you can called this variable
//because it has become function expression

// const sum = function(a,b,c){

//     return function(a){
//        console.log(a+b,'15') 
//     }
// }
// var storesum = sum(6,9,7)
// console.log(storesum(7),'storesum(7)')
// storesum(7)

const add = function(a,b,c){

    return {
     getTwoSum:function(e,f){
        console.log(a+b,e,f,'15,5,6') 
     },   
     getThreeSum:function(e,f,g){
        console.log(a+b+c,e,f,g,'22,5,6,5') 
     }, 
    }
}
//this is a first case  , create two function inside a main function using closure
var storeadd = add(6,9,7)
// console.log(storeadd.getTwoSum(5,6))
// console.log(storeadd.getThreeSum(5,6,5))
//this is a first case ,create two function inside a main function using closure




//this is a second case  , create two function inside a main function using closure
const finaloutput = storeadd.getThreeSum(6,4,5)
console.log(finaloutput)
// console.log(finaloutput.getThreeSum(5,6,5))

//this is a first case  , create two function inside a main function using closure



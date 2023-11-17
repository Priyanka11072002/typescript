interface Obj {
    [k: string]: string | number | boolean;
    name: string;
    age: number;
    city: string;
    country: string;
    isAdmin: boolean;
 }
 
 function generateQuery(obj: Obj) {
     const queryArray = Object.keys(obj)
         .filter(key => obj[key]) // Filter out falsy values
         .map(key => `${key}=${obj[key]}`);
 
     return "?" + queryArray.join("&");
 }
 
 const queryObject: Obj = {
     name: "John",
     age: 30,
     city: "",
     country: "USA",
     isAdmin: false,
 };
 
 const queryString = generateQuery(queryObject);
 console.log(queryString);
//**********annonymous function */
//we will create fun which does not have name is called annonyomous fun
//when we need anything at once time only we dont want to store fun in js complier browser of javascript 
function () { }
 
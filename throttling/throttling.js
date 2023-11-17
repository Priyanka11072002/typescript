//this is a arrow fun which take two argument ,we are passing arrow fun as well as time 
var mythrottling = function (fun, time) {
    //this is a annonyomous fun when we need data at once time , not load much memory size 
    return function () {
        document.getElementById("save").disabled = false;
        setTimeout(function () {
            fun();
            console.log('this is a concept of throttling');
        }, time);
    };
};
//this is a function expression because other func call in a variable , we can use this fun as variable 
var throttlingfun = mythrottling(function () {
    document.getElementById("save").disabled = true;
    console.log("when we want data should save at once time ");
}, 5000);

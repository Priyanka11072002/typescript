var counter = 0;
var debouncing = function () {
    if (counter === 0) {
        console.log('debouncing', counter++);
    }
    else if (counter > 0) {
        console.log('debouncing', counter++);
    }
};
var getDebouncingInterval = function (callback, time) {
    console.log('function expression');
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        setTimeout(function () {
            if (timer)
                clearTimeout(timer);
            callback();
            console.log('nested fun,annontmous fun,currying,callback');
            console.log(args, 'args');
        }, time);
    };
};
var nesteddebouncingfun = getDebouncingInterval(debouncing, 100);
console.log(nesteddebouncingfun(), 'nesteddebouncingfun ');
// console.log( nesteddebouncingfun(),' nesteddebouncingfun')
//when we store either any fun call or function in any variable , it become a function expression 

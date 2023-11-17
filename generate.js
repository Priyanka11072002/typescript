function generateQuery(obj) {
    var queryArray = Object.keys(obj)
        .filter(function (key) { return obj[key]; }) // Filter out falsy values
        .map(function (key) { return "".concat(key, "=").concat(obj[key]); });
    return "?" + queryArray.join("&");
}
var queryObject = {
    name: "John",
    age: 30,
    city: "",
    country: "USA",
    isAdmin: false,
};
var queryString = generateQuery(queryObject);
console.log(queryString);

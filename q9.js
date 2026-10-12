// console.log(typeof(42)); // int
// console.log(typeof("42")); // string
// console.log(typeof(true));// boolean
// console.log(typeof(null));  // object 
// console.log(typeof(undefined)); // undefined
// console.log(typeof([1, 2, 3])); // array
// console.log(typeof({ a: 1 })); // dictionary or object
// console.log(typeof(function () {})); // function
// console.log(typeof(NaN)); // number

function getType(value){
    return console.log(typeof(value))
}
TypeOfValue = getType(null)
// console.log(TypeOfValue)
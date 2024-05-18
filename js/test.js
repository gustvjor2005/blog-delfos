var x;

// Path: js/test.js

if (x == undefined) {
    console.log("x is undefined");
}

console.log(x);

var customer = {
    name: "Gustavo",
    age: 37
};


console.log(customer.name);
console.log(customer)


//using typeof operator

var subject = true;
var probe = typeof subject;

console.log("subject is type of " + probe);
console.log("probe is type of " + typeof probe);

//using function

function printName(name) {

    console.log("Hello " + name);

}

//working with DOM
printName(customer.name);

//var access = document.getElementById("code9");
//console.log(access.innerHTML)

var year = null;
console.log(typeof year)
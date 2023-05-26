/*arrow functions is an elageant way of writing anonymous function(name less function)
the benefits are actually beyond syntantic case
arrow fun only added in js from es2015*/

const add = function abc(a,b){
    return a+b
}

const hello = function(name){
    console.log("Hello"+name)
}

sum = (a,b) => a+b
greet = (name) => {console.log("Hai"+name)}

console.log(add(3,5))
console.log(sum(4,5))
hello("Shri")
greet("SK")
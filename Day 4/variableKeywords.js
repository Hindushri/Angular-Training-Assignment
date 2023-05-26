//global fun scope and local scope

a=20

function p()
{
    a=30
    console.log("a:",a) // with out let or var , the variable is consider as Global one so, it is access
    a=35
}

p()
console.log("a as global:",a)

//Fun scope of variable
b=20


function p2()
{
    var b=30
    console.log("b:",b)  //the variable is consider as Function scope variable one so, it is access with in the fun
    var b=35
}

p2()
console.log("b as global:",b)

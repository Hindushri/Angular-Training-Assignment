function outer()
{
    a=90 //if I put var for the variable so new context will be created for each assign of function

    function inner()
    {
        console.log("outer a value in inner",a)
        a++
    }
    return inner
}

fun = outer()
fun2= outer()
fun()       //90 if var, first context created
fun()       //91 if var, 1st context
fun2()      //90 if var, sec context created
fun()       //92 if var, 1st context
fun2()      //91 if var, 2nd context
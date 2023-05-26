
/*function demovariable()
{
    let a=20
    console.log("within the outer range:", a)
    {
         a=90 
        console.log("within the inner range:",a)
    }
    console.log("again the outer range:",a)
}

demovariable()*/


//by the const

function demovariable2()
{
    var a=20
    console.log("within the outer range:", a)
    {
        const a=90 
        console.log("within the inner range:",a)
        {
            
        let a=100
        console.log(a)
        }
    }
    console.log("again the outer range:",a)
}

demovariable2()
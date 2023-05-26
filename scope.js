function sample()
{
    console.log(this)
}

sample()


//Closures -->javascript allows to create fun within fun

function outer()
{
    state=1
    function inner()
    {
        console.log(state,"is accessible within inner")
        instate=1
        console.log(instate,"within fun")
        state++
        instate++
    }
    console.log(state,"access in outer")
    //console.log(instate,"access in outer")        //it is not possible
    inner()
}

outer()
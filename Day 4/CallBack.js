//function having function as a parameter is called CallBack

function def(fun)
{
    console.log("first 20% of the logic")
    fun("data set 1")
    console.log("nxt 20% of the logic")
    fun("data set 2")
    console.log("over")

}

def(
    function call(data)
    {
        console.log("caller side")
        console.log(data,"is process")
    }
)
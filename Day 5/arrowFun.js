function libfun(fun)
{
    var dataitems=['a','b','c','d']
    fun(dataitems[Math.round(Math.random()*2)])
}

class Data{
    constructor(data){
        this.data = data
    }
    show()
    {
        console.log("Data--",this.data)
    }

    changeData()
    {
        /*libfun(function(value)
        {
            this.data = value
        }.bind(this))*/    //bind is used to get the this if we use bind then use in every time

        libfun((value)=>{this.data = value}) 
    }
}

obj = new Data("JAVA SCRIPT")
obj.show()
obj.changeData()
obj.show()
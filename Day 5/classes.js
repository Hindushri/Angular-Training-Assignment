class stu{
    constructor(sno,name)
    {
        this.sno = sno
        this.name = name
    }
    display()
    {
        console.log("sno:",sno,"Name:",name)
    }
}

obj = stu(11,"Shri")
obj1 = stu(12,"SK")

obj.display()
obj1.display()
function stu(sno, name)
{
    this.sno = sno
    this.name = name
    console.log(this)
}

//stu()  this is the window scope 

stu.prototype.display = function()
{
    console.log("s.no:",this.sno,"Name:",this.name)
}

obj1=new stu(11,"Shri") //seperate scope for student is created that student will behave like a class and student() will behave like constructor
obj2=new stu(11,"Sk")

obj1.display()
obj2.display()

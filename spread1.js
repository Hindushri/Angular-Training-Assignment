person={sno:1,name:'shri'}
person2 = person    //pass by value
console.log(person)
person2.skill=['c','c++','html']
//member = {...person, interest: ['coding','singing']}          //add the new value
member = {...person,name:'sk', interest: ['coding','singing']}  //change the existing value 
console.log(person)
console.log(person2)
console.log(member)
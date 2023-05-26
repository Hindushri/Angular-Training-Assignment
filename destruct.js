//destructuring

/*person={sno:1,name:'shri'}

console.log(person.name)

const{sno,name} = person

console.log(name)

const{sno:id,name:identifier} = person      //desturct as alias

console.log(identifier)*/


//array destructuring

name = ['shri','sk','vel']

const[p1,p2,p3]=name

console.log(p2)

team =[{name:'shri',age:21},{name1:'sk',age:21},{name:'vel',age:21}]

const[m1,m2,m3] = team
console.log(m2)

const{name1,age} = m2

console.log(m2)
console.log(age)

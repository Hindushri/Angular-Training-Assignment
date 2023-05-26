person = {
    sno:1,
    name:'shri',
    city: 'Vpm'
}

list=[1,2,3]
list['sno']= 34
list['name']='SK'

for(let x in person)
    console.log(x,person[x])

console.log(Object.keys(person))
console.log(Object.keys(list))

a=[1,2,3]
c=[8,9,10]
b=[...a] //copy the values of an array , pass by value(it won't affect the a[])

//console.log(a)
//console.log(b)

b[5]=90
//console.log(a)
//console.log(b)
a=[1,2,3,c]
//console.log(a)

c[3]=11

console.log(a)
console.log(b)


d=[1,2,3]
e=[4,5,6,[...d]]
console.log(e)
f=[...e]
d[3]=9

console.log(e)
console.log(f)
console.log(d)
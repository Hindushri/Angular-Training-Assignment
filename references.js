a=[1,2,3]
b=a  //pass by references
console.log(a)
console.log(b)
b[4]=4
console.log(a)


c=[]
for(let i in a)
    c[i]=a[i] //assign or copy

console.log(c)
c[5]=100

console.log(a)
console.log(c)
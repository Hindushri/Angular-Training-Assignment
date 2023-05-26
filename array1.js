a=[1,2,3,4,5]

a[7]=7
/*for(let i=0;i< a.length;i++)
    console.log(a[i])*/


/*for(let i in a)    //it has auto increment
    console.log(a[i])*/

a[-23]=89
b={sno:1,name:'Shri'}
//a[b]='Java'
a[JSON.stringify(b)]='script'

for(let x in a)
    console.log(x,a[x])
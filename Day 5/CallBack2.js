function sndBack(arr,fun)
{
    let arr2 = ['A','B','C','D','E']

    for(let i in arr)
    {
        if(arr[i]>=0 && arr[i]<=3)
            fun(arr2[arr[i]])
        else
            fun("Invalid")
    }
}
let a=[2,3,4,5]
sndBack(a,function(data)
{
    console.log("Got...",data)
})
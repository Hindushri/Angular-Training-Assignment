currentindx = 0 
images=["first.jpeg","sec.jpeg","third.jpeg","four.jpeg"]

setInterval(
    function()
    {
        currentindx = Math.round(Math.random()*2)
        //document.getElementById("img1").src = images[Math.round(Math.random()*3)] without variable allocation
        document.getElementById("img1").src = images[currentindx]
    },10000
)

function changeimg(arrowtype)
{

    if(arrowtype == "right")
    {
     
        currentindx = currentindx == 3?0:++currentindx
    }
    else if(arrowtype == "left")
    {
        
        currentindx = currentindx == 0?3:--currentindx
    }
    document.getElementById("img1").src=images[currentindx]
}
const randomColor= function()
{
    let hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++)
    {
        color+=(hex[Math.floor(Math.random()*16)]);
    }
    
    return color;

}
let intervalId;
let start=document.querySelector("#start");
function backgroundColorChange()
{
    document.body.style.backgroundColor=randomColor();
}
start.addEventListener("click",function(e)
{   
    if(!intervalId) intervalId=setInterval(backgroundColorChange,1000)
})
let stop=document.querySelector("#stop")
stop.addEventListener("click",function(e)
{
    clearInterval(intervalId);
    intervalId=null
})


let c=0;
const para=document.getElementById('count')
const colorChange=document.getElementById('counter')

function change()
{
    const random="#"+Math.floor(Math.random()*10000000).toString(16);
    const random2="#"+Math.floor(Math.random()*10000000).toString(16);
    document.body.style.background=`linear-gradient(${random},${random2})`
}
function incr()
{
    if(c<25)
    {
        ++c
        para.textContent=c;
        change()
    }
    else
    {
        print.textContent='Counter will work 0 to 25 only'
    }
}
function decr()
{
    if(c>0)
    {
        --c
        para.textContent=c;
        change()
    }
    else
    {
        print.textContent='Counter will work 0 to 25 only'
    } 
}
function reset()
{
    c=0;
    para.textContent=c;
    odd.textContent="EVEN"
}
function checkOdd(x)
{
    if(x%2==0)
        {
            odd.textContent="EVEN"
        }
    else{
        odd.textContent="ODD"
    }
}
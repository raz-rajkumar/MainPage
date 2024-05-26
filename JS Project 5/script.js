setInterval(function(){
    let c=new Date()
    document.getElementById('time').textContent=c.toLocaleTimeString()
    document.getElementById('day').textContent=days(c.getDay())
    document.getElementById('greet').textContent=greet(c.getHours())
},1000)
function days(d){
    switch(d)
    {
        case 1: return 'Monday';break;
        case 2: return 'Tuesday';break;
        case 3: return 'Wednesday';break;
        case 4: return 'Thursday';break;
        case 5: return 'Friday';break;
        case 6: return 'Saturday';break;
        case 0: return 'Sunday';break;
        
    }
}
function greet(h)
{
    if(h>4&&h<=11)return 'Good Morning'
    else if(h>=12&&h<=15) return 'Good AfterNoon'
    else if(h>=16&&h<=21) return 'Good Evening'
    else return 'Good Night'
}
function ShowTime(){
    var date=new Date();
var h=date.getHours();
var m=date.getMinutes();
var s=date.getSeconds();
var session="AM";
if(h==0){
    h=1;
}
if(h>12)
{
    h=h-12;
    session="PM";
}
h=(h<10)?"0"+h:h;
m=(m<10)?"0"+m:m;
s=(s<10)?"0"+s:s;

document.getElementById("digital Clock").innerHTML= h + ":" + m + ":" + s + " " +session ;
setTimeout(ShowTime,1000);
}

ShowTime();

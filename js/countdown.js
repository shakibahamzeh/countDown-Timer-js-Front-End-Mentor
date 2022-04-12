const day=document.getElementById("day");
const hour=document.getElementById("hour");
const minute=document.getElementById("minute");
const second=document.getElementById("second");

//future date
let countDownDate=new Date("April 11, 2028 10:37:25").getTime();

let interval=setInterval(function(){
    //today date
    let nowDate=new Date().getTime();

    //distance
    let distance=countDownDate - nowDate;

    //calculation day,hour,minute,second
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

 day.innerHTML =days;
 hour.innerHTML= hours;
 minute.innerHTML= minutes;
 second.innerHTML= seconds;


 if (distance < 0) {
    clearInterval(interval);
    document.querySelector(".timeContainer").innerHTML = "EXPIRED";
  }
},1000);

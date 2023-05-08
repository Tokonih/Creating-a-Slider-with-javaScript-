// let index = 0




// function slider(){
// let slide = document.querySelectorAll(".slide" );

//     for(let i=0; i<slide.length; i++){
//         slide[i].classList.remove("active");
//     }
//     index += 1;
//     if(index >= slide.length){
//         index=0;
//     }
//     slide[index].classList.add("active");

// }
// slider()

// setInterval(()=>{
//         slider();
// },2000);

let index = 0

function next(){
    let slide = document.querySelectorAll(".slide");
    for (let i=0; i<slide.length; i++){
        slide[index].classList.remove("active")
    }
    // index += 1;
    if(index < slide.length -1){
        index ++
        slide[index].classList.add("active")
    }
    slide[index].classList.add("active");
}
next()


function prev(){
    let slide =document.querySelectorAll(".slide");
   for(let i=0; i<slide.length; i++){
   slide[index].classList.remove("active")
   }
//    index -=1
   if(index > 0){
    index--;
    slide[index].classList.add("active")
    // index = slide.length - 1;
   }

   slide[index].classList.add("active")
};
prev()

function getTime(){
   let date = new Date();
   let hour = date.getHours();
   let  min =date.getMinutes();
   let sec = date.getSeconds();

   document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec;  
}

setInterval(getTime, 1000)

let displayTime = document.getElementById("displayTime")
let startBtn = document.getElementById("startBtn")
let pauseBtn = document.getElementById("pauseBtn")
let resetBtn = document.getElementById("resetBtn")

// let setTime = 0;
// let elapsedTime = 0;
// let intervalID = 0;
// pause = true;
// let hrs = 0;
// let mins = 0;
// let secs = 0

// startBtn.addEventListener("click", () => {
//     if(pause){
//         pause = false;
//         setTime = Date.now() - elapsedTime;
//         intervalID = setInterval(updateTime, 75);
//     }
   
// });

// function updateTime(){
//     elapsedTime = Date.now - setTime;

//     secs = Math.floor((elapsedTime/ 1000) % 60);
//     mins = Math.floor((elapsedTime/(1000*60)) % 60);
//     hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

//     displayTime.textContent = `${hrs} : ${mins} : ${secs}`
//     // console.log(displayTime)
// };



let setTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let pause = true;
let intervalId;
let hrs = 0;
let min = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(pause){
        pause = false;
        setTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 75);
    }
});



pauseBtn.addEventListener("click", () => {
    if(!pause){
        elapsedTime = Date.now() - setTime;
        clearInterval(intervalId);
    }

});

resetBtn.addEventListener("click", () => {
    pause =  true;
    intervalId = 0
    setTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    min = 0;
    secs = 0;

    displayTime.textContent = `${0} : ${0} : ${0}`
});

function updateTime (){
    elapsedTime = Date.now() - setTime;
    secs = Math.floor((elapsedTime/1000) % 60)
    min = Math.floor((elapsedTime/ (1000*60)) % 60)
    hrs = Math.floor((elapsedTime/(1000*60*60)) % 60)

    displayTime.textContent= `${hrs} : ${min} : ${secs}`
};

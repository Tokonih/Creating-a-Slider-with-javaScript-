

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


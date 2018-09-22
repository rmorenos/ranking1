
let elementList = document.querySelectorAll(".fa-star");
let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");

elementList.forEach(function(element){
    element.addEventListener('click',function(){
        element.classList.remove("far");
        element.classList.add("fas");
    })
});

closes.forEach(function(close){
    close.addEventListener('click', function(ev){
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("fadeInRight");
        content.classList.add("animated");
        content.classList.add("fadeOutRight");
        setTimeout(() => {
            location.href="/";
        }, 500);
     });
})

console.log(elementList); 


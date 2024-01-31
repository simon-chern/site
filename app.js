const questions = document.querySelectorAll(".question")
const toggleButton = document.querySelector(".nav-toggle")
const links = document.querySelector('.links')
const li = document.querySelectorAll('a')

//nav toggle
toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle("nav-toggle-clicked");
    links.classList.toggle("show-links");
})

//slidiing back the nav bar
li.forEach(link => {
    link.addEventListener('click', () => {
        links.classList.remove('show-links');
        toggleButton.classList.remove("nav-toggle-clicked");
    });
});

//button to the top
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 500) {    
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
})
//opacity,sliding from left and from right on scrool that element would smoothly appear on the screen
const opacityElements = document.querySelectorAll('.opacity');
const leftSlide = document.querySelectorAll('.leftSlide');
const rightSlide = document.querySelectorAll('.rightSlide');


window.addEventListener('scroll', () => {
    opacityElements.forEach(element => {
        const scrollHeight = window.pageYOffset;
        const height = element.getBoundingClientRect().top + scrollHeight;
        if (scrollHeight < height) {
            element.classList.add('show-opacity');
        }
    })
})


//questions 
questions.forEach((question) => {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", ()=>{
        questions.forEach((item) => {
            if (item !== question){
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
})
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();



const questions = document.querySelectorAll(".question")
const toggleButton = document.querySelector(".nav-toggle")
const links = document.querySelector('.links')
const li = document.querySelectorAll('a')


toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle("nav-toggle-clicked");
    links.classList.toggle("show-links");
})

li.forEach(link => {
    link.addEventListener('click', () => {
        links.classList.remove('show-links');
        toggleButton.classList.remove("nav-toggle-clicked");
    });
});

const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 500) {    
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
})

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



const projectList = document.querySelector(".projects-list");
const projectItems = document.querySelectorAll(".projects-item");

let position = 0;

projectItems.forEach((item) => {
    const cloneCard = item.cloneNode(true);
    projectList.appendChild(cloneCard);

});
projectList.addEventListener("mouseenter", () => {
    clearInterval(timer)
})
projectList.addEventListener("mouseleave", () => {
    timer = setInterval(moveSlide, 30)
})
const loopWidth = projectList.children[6].offsetLeft - projectList.children[0].offsetLeft
console.log(loopWidth);

function moveSlide() {
    position = position - 1
    projectList.style.transform = `translateX(${position}px)`;
    if (position <= -loopWidth) {
        position = 0
    }
}

let timer = setInterval(moveSlide, 30)



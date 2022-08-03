const barmenu = document.querySelector(".barmenu");
const menubar = document.querySelector(".menubar");
const sidebar = document.querySelector(".sidebar");
const logo = document.querySelector(".logo");
const bar = document.querySelectorAll(".bar");


barmenu.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    menubar.classList.toggle("active");
    logo.classList.toggle("active");
    barmenu.classList.toggle("active");
    for (let i = 0; i < bar.length; i++){
        bar[i].classList.toggle("active");
    }
})
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")


btn1.addEventListener("click", () => {
    let btn = document.getElementById("btn1");
   document.body.style.background = "#808080";});
   btn2.addEventListener("click", () => {
    let btn = document.getElementById("btn2");
   document.body.style.background = "#888888";});
   btn3.addEventListener("click", () => {
    let btn = document.getElementById("btn3");
   document.body.style.background = "#909090";});

   const flip = document.querySelector(".flip");

   const cv = document.querySelector(".cv");
   const flip2 = document.querySelector(".flip2");
   const second = document.querySelector(".second");
   flip.addEventListener("click", () => {
            cv.classList.toggle("active");
            flip.classList.toggle("active");
            second.classList.toggle("active");
            flip2.classList.toggle("active");
   })
   flip2.addEventListener("click", () => {
    cv.classList.toggle("active");
            flip.classList.toggle("active");
            second.classList.toggle("active");
            flip2.classList.toggle("active");
   })
  
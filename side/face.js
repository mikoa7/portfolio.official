let colorbtn = document.getElementById("colorbtn");
let facebtn = document.getElementById("facebtn");
let hatbtn = document.getElementById("hatbtn");

let docRoot = document.querySelector(":root");

let bodycolors = ["#E34A27","#7CB9E8","#6F00FF","#555555"];
let colors = [...bodycolors];
let [counter1, counter2, counter3] = Array(3).fill(0);

let setCounter = (counter, len) => {
    return counter < len - 1 ? counter + 1 : 0;
};
facebtn.addEventListener("click", () => {
    counter1 = setCounter(counter1, 6);
    document.getElementById("face").setAttribute("src", 'face-${counter1}.png');

});


colorbtn.addEventListener("click", () => {
    counter2 = setCounter(counter2, bodycolors.length);
    docRoot.style.setProperty("--color-monster", bodycolors [counter2]);
});

hatbtn.addEventListener("click", () => {
    counter3 = setCounter(counter3, colors.length);
    docRoot.style.setProperty("--color-hat", colors [counter3]);
});
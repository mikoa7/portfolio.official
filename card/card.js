
const black = document.getElementById("black");
const grey = document.getElementById("grey");
const blue = document.getElementById("blue");
const photo = document.getElementById("photo");

black.onclick = function(){
    photo.src = "photo1.webp"
}
grey.onclick = function(){
    photo.src = "photo2.webp"
}
blue.onclick = function(){
    photo.src = "photo3.webp"
}
function color(param) {
    let x = param.style.color = "blue";
    if(x){
            param.addEventListener("click", () => {
                param.style.color = "black";
                return param;
            })
        }
}

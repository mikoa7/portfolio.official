let inputTextArea = document.getElementById("input-textarea");
let letterCount = document.getElementById("letter-count");
let characterCount = document.getElementById("character-count");

inputTextArea.addEventListener("input", () => {
    characterCount.textContent = inputTextArea.value.length;
    let txt = inputTextArea.value;
    
    letterCount.textContent = txt.split(/\s+/).length;
})

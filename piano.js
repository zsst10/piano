
let naturalButtons  = document.querySelectorAll(".bu1");
let sharpButtons = document.querySelectorAll(".bu2");

function playNote() {
    let note = this.getAttribute("data-note");
    let audio = new Audio(`sounds/${note}.mp3`);
    
    audio.play().catch(error => {
        console.error("Error playing sound:", error);
    });
}

naturalButtons.forEach(button => {
    button.addEventListener("click", playNote);
});

sharpButtons.forEach(button => {
    button.addEventListener("click", playNote); 
});
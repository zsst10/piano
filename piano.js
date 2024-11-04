const audioFiles = {
    c1: new Audio("sounds/c1.mp3"),
    csharp: new Audio("sounds/csharp.mp3"),
    d1: new Audio("sounds/d1.mp3"),
    // Continue for all notes
};

function playNote() {
    const note = this.getAttribute("data-note");
    const audio = audioFiles[note];
    if (audio) {
        audio.currentTime = 0; // Reset to start of sound
        audio.play();
    }
}
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


document.body.addEventListener("keydown", (ev) => {
    const key = ev.key.toLowerCase(); // Get the pressed key in lowercase
    let note;

    // Map specific keys to piano notes
    switch (key) {
        case 'a':
            note = 'c1';
            button = document.querySelector("[data-note='c1']");
            break;
        case 'é':
            note = 'csharp';
            button = document.querySelector("[data-note='csharp']");
            break;
        case 'z':
            note = 'd1';
            button = document.querySelector("[data-note='d1']");
            break;
        case '"':
            note = 'dsharp';
            button = document.querySelector("[data-note='dsharp']");
            break;
        case 'e':
            note = 'e1';
            button = document.querySelector("[data-note='e1']");
            break;
        case 'r':
            note = 'f1';
            button = document.querySelector("[data-note='f1']");
            break;
        case '(':
            note = 'fsharp';
            button = document.querySelector("[data-note='fsharp']");
            break;
        case 't':
            note = 'g1';
            button = document.querySelector("[data-note='g1']");
            break;
        case '-':
            note = 'gsharp';
            button = document.querySelector("[data-note='gsharp']");
            break;
        case 'y':
            note = 'a1';
            button = document.querySelector("[data-note='a1']");
            break;
        case 'è':
            note = 'asharp';
            button = document.querySelector("[data-note='asharp']");
            break;
        case 'u':
            note = 'b1';
            button = document.querySelector("[data-note='b1']");
            break;
        case 'i':
            note = 'c2';
            button = document.querySelector("[data-note='c1']");
            break;
        case 'ç':
            note = 'csharp2';
            button = document.querySelector("[data-note='csharp']");
            break;
        case 'o':
            note = 'd2';
            button = document.querySelector("[data-note='d1']");
            break;
        case 'à':
            note = 'dsharp2';
            button = document.querySelector("[data-note='dsharp']");
            break;
        case 'p':
            note = 'e2';
            button = document.querySelector("[data-note='e1']");
            break;
        case '^':
            note = 'f2';
            button = document.querySelector("[data-note='f1']");
            break;
        case '=':
            note = 'fsharp2';
            button = document.querySelector("[data-note='fsharp']");
            break;
        case 'w':
            note = 'g2';
            button = document.querySelector("[data-note='g1']");
            break;
        case 's':
            note = 'gsharp2';
            button = document.querySelector("[data-note='gsharp']");
            break;
        case 'x':
            note = 'a2';
            button = document.querySelector("[data-note='a1']");
            break;
        case 'd':
            note = 'asharp2';
            button = document.querySelector("[data-note='asharp']");
            break;
        case 'c':
            note = 'b2';
            button = document.querySelector("[data-note='b1']");
            break;
               
        case 'v':
            note = 'c3';
            button = document.querySelector("[data-note='c1']");
            break;
        case 'g':
            note = 'csharp3';
            button = document.querySelector("[data-note='csharp']");
            break;
        case 'b':
            note = 'd3';
            button = document.querySelector("[data-note='d1']");
            break;
        case 'h':
            note = 'dsharp3';
            button = document.querySelector("[data-note='dsharp']");
            break;
        case 'n':
            note = 'e3';
            button = document.querySelector("[data-note='e1']");
            break;
        case ',':
            note = 'f3';
            button = document.querySelector("[data-note='f1']");
            break;
        case 'k':
            note = 'fsharp3';
            button = document.querySelector("[data-note='fsharp']");
            break;
        case ';':
            note = 'g3';
            button = document.querySelector("[data-note='g1']");
            break;
        case 'l':
            note = 'gsharp3';
            button = document.querySelector("[data-note='gsharp']");
            break;
        case ':':
            note = 'a3';
            button = document.querySelector("[data-note='a1']");
            break;
        case 'm':
            note = 'asharp3';
            button = document.querySelector("[data-note='asharp']");
            break;
        case '!':
            note = 'b3';
            button = document.querySelector("[data-note='b1']");
            break;
        default:
            return;
    }


    playNoteAudio(note);

    // Briefly apply active styling to the button
    if (button) {
        button.classList.add('active');
        setTimeout(() => button.classList.remove('active'), 100); // Remove styling after 100ms
    }
});

function playNoteAudio(note) {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.currentTime = 0;
    audio.play().catch(error => {
        console.error("Error playing sound:", error);
    });
}

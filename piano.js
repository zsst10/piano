const audioFiles = {
    c1: new Audio("sounds/c1.mp3"),
    csharp: new Audio("sounds/csharp.mp3"),
    d1: new Audio("sounds/d1.mp3"),
    dsharp: new Audio("sounds/dsharp.mp3"),
    e1: new Audio("sounds/e1.mp3"),
    f1: new Audio("sounds/f1.mp3"),
    fsharp: new Audio("sounds/fsharp.mp3"),
    g1: new Audio("sounds/g1.mp3"),
    gsharp: new Audio("sounds/gsharp.mp3"),
    a1: new Audio("sounds/a1.mp3"),
    asharp: new Audio("sounds/asharp.mp3"),
    b1: new Audio("sounds/b1.mp3"),
    c2: new Audio("sounds/c1.mp3"),
    csharp2: new Audio("sounds/csharp2.mp3"),
    d2: new Audio("sounds/d2.mp3"),
    dsharp2: new Audio("sounds/dsharp2.mp3"),
    e2: new Audio("sounds/e2.mp3"),
    f2: new Audio("sounds/f2.mp3"),
    fsharp2: new Audio("sounds/fsharp2.mp3"),
    g2: new Audio("sounds/g2.mp3"),
    gsharp2: new Audio("sounds/gsharp2.mp3"),
    a2: new Audio("sounds/a2.mp3"),
    asharp2: new Audio("sounds/asharp2.mp3"),
    b2: new Audio("sounds/b2.mp3"),
    c3: new Audio("sounds/c3.mp3"),
    csharp3: new Audio("sounds/csharp3.mp3"),
    d3: new Audio("sounds/d3.mp3"),
    dsharp3: new Audio("sounds/dsharp3.mp3"),
    e3: new Audio("sounds/e3.mp3"),
    f3: new Audio("sounds/f3.mp3"),
    fsharp3: new Audio("sounds/fsharp3.mp3"),
    g3: new Audio("sounds/g3.mp3"),
    gsharp3: new Audio("sounds/gsharp3.mp3"),
    a3: new Audio("sounds/a3.mp3"),
    asharp3: new Audio("sounds/asharp3.mp3"),
    b3: new Audio("sounds/b3.mp3"),
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

let firstBox = document.querySelector(".first-box");
let secondBox = document.querySelector(".second-box");

function generateRandomColor(){
    let hexCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

    let color = "#"
    
    for(let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * 16);
        color = color + hexCharacter[randomNumber];
    }
    return color;
}

function handleClick(){
    //1. Generate random color
    let randomColor = generateRandomColor();
    //change the background color of the first box
    firstBox.style.backgroundColor = randomColor;
}

function handleMouseMove(){
    //1. Generate random color
    let randomColor = generateRandomColor();
    //change the background color of the first box
    secondBox.style.backgroundColor = randomColor;
}

firstBox.addEventListener("click", handleClick);
secondBox.addEventListener("mousemove", handleMouseMove);
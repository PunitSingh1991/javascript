let parentBox = document.querySelector(".container");

function generateRandomColor (){
    let hexCharacter = ["0", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let color = "#"

    for(let i=0; i<6; i++){
        let rendomNumber = getRandomNumber(16);
        color = color + hexCharacter[rendomNumber];
    }
    return color;
}
function getRandomNumber(max){
    return Math.floor(Math.random() * max)
}

for(let i=0; i<500; i++){
    let div = document.createElement("div")
    div.classList.add("box");
    div.style.width = "60px";
     div.style.height = "60px";

    let h3 = document.createElement("h3");
    let rendomNo = getRandomNumber(500);
    h3.innerText = rendomNo;

    div.append(h3);
    parentBox.append(div)
}

let allBoxes = document.querySelectorAll(".box")

function handleMouseMove(){
    allBoxes.forEach(box => {
    box.style.backgroundColor = generateRandomColor();
   // allBoxes.querySelector("h3").innerText = getRandomNumber(500);
});
}

parentBox.addEventListener(
    "mousemove",
    handleMouseMove
    );
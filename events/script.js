const COLORS = ["black", "white", "gray", "silver", "maroon", "red", "purple", "fushsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"];

let root = document.querySelector(".buttons");
let h1 = document.querySelector("h1")

function handleClick(colorText, e){
    if(e.shiftKey === true){
        h1.innerText = colorText;
        h1.style.backgroundColor = colorText
    }else{
        h1.innerText = "Use shift key to change Color"
    }
}

COLORS.forEach(color => {
    let div = document.createElement("div");
    div.classList.add("box");

    div.addEventListener("click", function(event){
        console.log(event)
        handleClick(color, event)
    })
    div.style.backgroundColor = color;
    root.append(div);
})
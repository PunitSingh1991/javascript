let allBoxes = document.querySelectorAll("div");

function handleClick(event){
    console.log(event.target);
}

allBoxes.forEach((elm) =>
elm.addEventListener("click", handleClick) 
);

//document.body.addEventListener("click", handleClick);
//document.addEventListener("click", handleClick)
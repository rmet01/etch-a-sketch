function createDivs(amount){
    for (let count = amount; count > 0; count--){
        const div = document.createElement("div");
        divContainer.appendChild(div);
        div.classList.add("box");
        let screen = 0.0;
        let widthCalc = (320 / (Math.sqrt(amount))) + "px";
        div.style.width = widthCalc;
        div.style.height = widthCalc;
        div.addEventListener("mouseover", () => {
            if (chaos) { 
                div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            } else {
                div.style.backgroundColor = 'hotpink';
            }
        
        });
        div.addEventListener("mouseover", () => {
            if (layers) { 
                if (screen < 1.0) {
                screen = screen + 0.1;
                div.style.backgroundImage = `linear-gradient(rgba(0,0,0,${screen}), rgba(0,0,0,${screen}))`;
            };
            }        
        });

    }
};

function divReset(){
    const deleteDivs = document.querySelectorAll(".box");
    deleteDivs.forEach(item => {
        item.remove();
    });
    let newChoice = parseInt(prompt("How many squares do you want per side? (max 100)"),10)
    while (newChoice < 1 || newChoice > 100 || Number.isInteger(newChoice) == false) {
        newChoice = parseInt(prompt("Please enter a valid number (1-100)"),10)
    };
    return newChoice;
}

const headerContainer = document.createElement("div");
const divContainer = document.createElement("div");
const toggleContainer = document.createElement("div");
const resetButton = document.createElement("button");
const chaosToggle = document.createElement("button");
const layerToggle = document.createElement("button");
divContainer.setAttribute("id", "divContainer");
headerContainer.setAttribute("id", "headerContainer");

document.body.appendChild(headerContainer);
document.body.appendChild(divContainer);
headerContainer.appendChild(toggleContainer);
headerContainer.appendChild(resetButton);
toggleContainer.appendChild(chaosToggle);
toggleContainer.appendChild(layerToggle);


resetButton.textContent = "RESET?";
chaosToggle.textContent = "CHAOS?";
layerToggle.textContent = "LAYERS?";

let chaos = false;
let layers = false;

function etchSketch() {
    createDivs(16*16);
    resetButton.addEventListener("click", () => {
            createDivs(Math.pow(divReset(),2));
        })
    let toggleDivs = document.querySelectorAll(".box");
    chaosToggle.addEventListener("click", () =>{
        chaos = !chaos;
        if (chaos) {
            chaosToggle.style.color = "hotpink";
            } 
        else {
            chaosToggle.style.color = "white";
            }
    })
    layerToggle.addEventListener("click", () =>{
        layers = !layers;
        if (layers) {
            layerToggle.style.color = "hotpink";
            } 
        else {
            layerToggle.style.color = "white";
            }
    })
}

etchSketch()

function createDivs(amount){
    for (amount; amount > 0; amount--){
        const div = document.createElement("div");
        divContainer.appendChild(div);
        div.classList.add("box");

    }
};

const divContainer = document.createElement("div");
divContainer.setAttribute("id", "divContainer");
document.body.appendChild(divContainer);



createDivs(16*16);
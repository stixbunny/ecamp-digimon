const select = document.getElementById("digimon-select");
const digimonCard = document.getElementById("digimon-card");
fillDigimonSelect();

function fillDigimonSelect() {
    fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.json())
    .then(digimonList => {
        for (let digimon of digimonList) {
            console.log(digimon);
            let option = document.createElement("option");
            option.value = digimon.name;
            option.innerHTML = digimon.name;
            select.appendChild(option);
        }
    })
}

function getDigimon(select) {
    if(digimonCard.classList.contains("d-none")) {
        digimonCard.classList.remove("d-none");
    }
}
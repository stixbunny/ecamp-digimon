const select = document.getElementById("digimon-select");
const digimonCard = document.getElementById("digimon-card");
fillDigimonSelect();
let errorModal = new bootstrap.Modal(document.getElementById('error-modal'));

//Puebla la lista desplegable con los Digimon de la API
function fillDigimonSelect() {
    fetch("https://digimon-api.vercel.app/api/digimon")
        .then(response => response.json())
        .then(digimonList => {
            for (let digimon of digimonList) {
                let option = document.createElement("option");
                option.value = digimon.name;
                option.innerHTML = digimon.name;
                select.appendChild(option);
            }
        })
}

//Genera la tarjeta con el digimon desde el select
function getDigimon(select) {
    const digimonName = select.value;
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`)
        .then(response => response.json())
        .then(digimonList => {
            let digimon = digimonList[0];
            let digimonNameDiv = document.createElement("div");
            let digimonImg = document.createElement("img");
            let digimonLvlDiv = document.createElement("div");
            digimonNameDiv.className = "card-header";
            digimonNameDiv.innerHTML = digimon.name;
            digimonImg.src = digimon.img;
            digimonImg.className = "card-img";
            digimonLvlDiv.className = "card-footer";
            digimonLvlDiv.innerHTML = `Nivel: ${digimon.level}`;
            digimonCard.replaceChildren(digimonNameDiv, digimonImg, digimonLvlDiv);
            if(digimonCard.classList.contains("d-none")) {
                digimonCard.classList.remove("d-none");
            }
        })
    
}

//Genera la tarjeta con el digimon desde la busqueda
function findDigimon(form) {
    const digimonName = form["digimon"].value;
    if(digimonName === "") {
        return false;
    }
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`)
        .then(response => response.json())
        .then(digimonList => {
            let digimon = digimonList[0];
            let digimonNameDiv = document.createElement("div");
            let digimonImg = document.createElement("img");
            let digimonLvlDiv = document.createElement("div");
            digimonNameDiv.className = "card-header";
            digimonNameDiv.innerHTML = digimon.name;
            digimonImg.src = digimon.img;
            digimonImg.className = "card-img";
            digimonLvlDiv.className = "card-footer";
            digimonLvlDiv.innerHTML = `Nivel: ${digimon.level}`;
            digimonCard.replaceChildren(digimonNameDiv, digimonImg, digimonLvlDiv);
            if(digimonCard.classList.contains("d-none")) {
                digimonCard.classList.remove("d-none");
            }
        })
        .catch(function(error) {
            errorModal.toggle();
            return false;
        });
    return false;
}
// Dynamic Year and Last Modified
//Get the year
const today = new Date();
let year = today.getFullYear();

//Output year
document.getElementById("currentyear").innerHTML = year;

document.getElementById("lastModified").innerHTML = document.lastModified;

// Hamburger Menu Toggle

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("open");
    navigation.classList.toggle("show");
});

//VISITS

// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    numVisits++;

    // 5️⃣ store the new visit total into localStorage, key=numVisits-ls
    localStorage.setItem("numVisits-ls", numVisits);
    //visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
    visitsDisplay.textContent = numVisits;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

//BUTTONS DESTINATIONS
let salto = document.querySelector("#btn-fall");
let roque = document.querySelector("#btn-roque");
let coro = document.querySelector("#btn-coro");

salto.addEventListener("click", () => {
    /* alert("Pressing button Angel Fall"); */
    window.location.href = "destinations.html#angel-falls";
});

roque.addEventListener("click", () => {
    window.location.href = "destinations.html#los-roques";
});

coro.addEventListener("click", () => {
    window.location.href = "destinations.html#coro-dunes";
});


//Dynamically generate content about curiosities
const dataSite = [
    {
        mesureextent: "979 mts",
        site: "Angels Falls",
        type: "Height"
    },
    {
        mesureextent: "91,280 ha",
        site: "The Coro Dunes",
        type: "Area"
    },
    {
        mesureextent: "221,120 ha",
        site: "Los Roques",
        type: "Area"
    }/* ,
    {
        mesureextent: "4,978 m",
        site: "Pico Bolívar",
        type: "Height"
    } */

];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.curiositis');

    if (dataSite.length > 0) {

        const htmlGenerado = dataSite.map(item => {

            let etiqueta = "";


            /* switch (item.site) {
                case "Angels Falls":
                    etiqueta = "Cascada";
                    break;
                case "Los Roques":
                    etiqueta = "Archipiélago";
                    break;
                case "The Coro Dunes":
                    etiqueta = "Desierto";
                    break;
                default:
                    etiqueta = "Not";
            } */

            if (item.site === "Angels Falls") {
                etiqueta = "Fall";
            } else if (item.site === "The Coro Dunes") {
                etiqueta = "Desert";
            } else if (item.site === "Los Roques") {
                etiqueta = "Archipelago";
            } else {
                etiqueta = "Updating";
            }

            return `
                <div class="box-curiositis">
                    <h3>${item.mesureextent}</h3>
                    <p class="site-name">${item.site}</p>
                    <p class="site-type"><span class="badge">${etiqueta}</span> - ${item.type}</p>
                </div>
            `;
        }).join('');

        container.innerHTML = htmlGenerado;

    } else {
        container.innerHTML = `<p>No hay maravillas de Venezuela para mostrar en este momento.</p>`;
    }
});


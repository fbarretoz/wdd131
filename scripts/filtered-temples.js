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

//Filtered Temples
/* const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/temples/payson-utah-temple.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Salvador Brazil",
        location: "Salvador, Brazil",
        dedicated: "2024, October, 20",
        area: 382207,
        imageUrl: "images/temples/salvador-brazil.jpg"
    },
    {
        templeName: "Caracas Venezuela",
        location: "Caracas, Venezuela",
        dedicated: "2000, August, 20",
        area: 15332,
        imageUrl: "images/temples/caracas_venezuela.webp"
    },
    {
        templeName: "Bogotá Colombia",
        location: "Bogotá, Colombia",
        dedicated: "1999, April, 9",
        area: 53500,
        imageUrl: "images/temples/bogota-colombia.jpg"
    }

]; */


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/temples/aba_nigeria.webp"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/temples/manti_utah.webp"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/temples/payson_utah_temple.webp"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "images/temples/yigo_guam.webp"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/temples/washington_dc.webp"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/temples/lima_peru.webp"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/temples/mexico_city.webp"
    },
    // Add more temple objects here...
    {
        templeName: "Salvador Brazil",
        location: "Salvador, Brazil",
        dedicated: "2024, October, 20",
        area: 382207,
        imageUrl: "images/temples/salvador_brazil.webp"
    },
    {
        templeName: "Caracas Venezuela",
        location: "Caracas, Venezuela",
        dedicated: "2000, August, 20",
        area: 15332,
        imageUrl: "images/temples/caracas_venezuela.webp"
    },
    {
        templeName: "Bogotá Colombia",
        location: "Bogotá, Colombia",
        dedicated: "1999, April, 9",
        area: 53500,
        imageUrl: "images/temples/bogota_colombia.webp"
    }

];



//Creating link variable
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const samllLink = document.querySelector("#small");
const titleMain = document.querySelector("h1");

//Creating filters
const templeOld = temples.filter((temple) => {
    return parseInt(temple.dedicated.split(",")[0], 10) < 1900
});
const templeNew = temples.filter((temple) => {
    return parseInt(temple.dedicated.split(",")[0], 10) > 2000
});
const templeLarge = temples.filter((temple) => temple.area > 90000);
const templeSmall = temples.filter((temple) => temple.area < 10000);

//Showing filtered result
homeLink.addEventListener("click", () => {
    createTempleCard(temples);
    titleMain.textContent = "Home";
});

oldLink.addEventListener("click", () => {
    createTempleCard(templeOld);
    titleMain.textContent = "Old";
});

newLink.addEventListener("click", () => {
    createTempleCard(templeNew);
    titleMain.textContent = "New";
});

largeLink.addEventListener("click", () => {
    createTempleCard(templeLarge);
    titleMain.textContent = "Large";
});

samllLink.addEventListener("click", () => {
    createTempleCard(templeSmall);
    titleMain.textContent = "Small";
});

createTempleCard(temples);

function createTempleCard(filteredTemples) {
    document.querySelector(".container").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("div");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);
    });
}
// Dynamic Year and Last Modified
//Get the year
const today = new Date();
let year = today.getFullYear();

//Output year
document.querySelector("#currentyear").innerHTML = year;

document.querySelector("#lastModified").innerHTML = document.lastModified;

//Add products to select element
const productSelect = document.querySelector("#product-name");

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    /* option.textContent = product.name; */
    option.textContent = capitalizeWords(product.name);
    productSelect.appendChild(option);
});

function capitalizeWords(texto) {
    return texto.toLowerCase().split(' ').map(palabra => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    }).join(' ');
}




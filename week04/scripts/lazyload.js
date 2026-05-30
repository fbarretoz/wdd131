// Dynamic Year and Last Modified
//Get the year
const today = new Date();
let year = today.getFullYear();

//Output year
document.getElementById("currentyear").innerHTML = year;

document.getElementById("lastModified").innerHTML = document.lastModified;
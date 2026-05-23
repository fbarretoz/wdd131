// Dynamic Year and Last Modified
//Get the year
const today = new Date();
let year = today.getFullYear();

//Output year
document.getElementById("currentyear").innerHTML = year;

document.getElementById("lastModified").innerHTML = document.lastModified;

const temperatureOutput = document.querySelector("#temperature");
const windSpeedOutput = document.querySelector("#wind-speed");
const windChillOutput = document.querySelector("#wind-chill");

const temperature = 10;
const windSpeed = 5;

temperatureOutput.textContent = `${temperature} °C`;
windSpeedOutput.textContent = `${windSpeed} km/h`;

function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

windChillOutput.textContent = temperature <= 10 && windSpeed > 4.8 ? `${calculateWindChill(temperature, windSpeed)} °C` : "N/A";

/* Fetching data from an api
*/

// require('dotenv').config()
// const apiKey = process.env.apiKey;
// console.log(apiKey);
const apiKey = "";


const weatherForm = document.querySelector(".inpForm");
const inputCity = document.querySelector(".cityInput");
const card = document.querySelector(".card");

weatherForm.addEventListener("submit", async event => {
    // forms have a default behavior to refresh the page
    // this line just prevents it from happing
    event.preventDefault();

    let city = inputCity.value
    if (city) {
        try {
            let weatherData = await getWeatherInfo(city);
            displayWeatherInfo(weatherData);
        } catch (err) {
            console.error(err);
            displayError(err);
        }
    } else {
        displayError("Please enter a city!");
    }

})

async function getWeatherInfo(city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(URL);

    if (!response.ok) throw new Error("Can't fetch the data!");
    return await response.json();
}

function displayWeatherInfo(data) {
    // console.log(data);
    const { name: city,
        main: { temp, humidity },
        weather: [{ description, id }]
    } = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const emojiDisplay = document.createElement('p');

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C | ${((temp - 273.15) * (9 / 5) + 32).toFixed(1)}°F`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = `${description}`;
    emojiDisplay.textContent = getWeatherEmoji(id);


    card.classList.add("sunny");
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    descDisplay.classList.add("descDisplay");
    emojiDisplay.classList.add("emojiDisplay");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(emojiDisplay);
}

function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            card.classList.add("rain");
            return "⛈️";
            break;
        case (weatherId >= 300 && weatherId < 400):
            return "🌦️";
            break;
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
            break;
        case (weatherId >= 600 && weatherId < 700):
            return "🌨️";
            break;
        case (weatherId >= 700 && weatherId < 800):
            return "🌪️";
            break;
        case (weatherId == 800):
            card.classList.add("sunny");
            return "☀️";
            break;
        case (weatherId >= 800 && weatherId < 900):
            return "☁️";
            break;
    }
}

function displayError(message) {
    const errDisp = document.createElement('p');
    errDisp.textContent = message;
    errDisp.classList.add("error");

    card.textContent = "";
    card.style.display = "flex";
    card.classList.add("errorGradient")
    card.appendChild(errDisp);

}
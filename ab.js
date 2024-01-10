const apiKey = "d7563d16bf80bd8068b568c53d65f430"
;
const cityInput = document.getElementById('cityInput');
const cityNameElement = document.getElementById('cityName');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

function getWeather() {
    const city = cityInput.value.trim();
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            cityNameElement.textContent = data.name;
            temperatureElement.textContent = `Temperature: ${data.main.temp} °C`;
            descriptionElement.textContent = `Weather: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again later.');
        });
}

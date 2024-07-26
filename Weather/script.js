document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weatherForm');
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const city = cityInput.value;
        await getWeather(city);
    });

    async function getWeather(city) {
        const apiKey = '643af57dc24221ad9429565f97368481';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            weatherInfo.innerHTML = `<p>${data.message}</p>`;
            weatherInfo.style.display = 'block';
        }
    }

    function displayWeather(data) {
        const { name, main, weather } = data;
        weatherInfo.innerHTML = `
            <h3>${name}</h3>
            <p>Temperature: ${main.temp} °C</p>
            <p>Weather: ${weather[0].description}</p>
        `;
        weatherInfo.style.display = 'block';
    }
});

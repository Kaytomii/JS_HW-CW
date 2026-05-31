const apiKey = '0006fae8c55ab1d0d3917f71859c80586';
const form = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const result = document.getElementById('result');

async function getCoordinates(city) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${apiKey}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to get coordinates');
    const data = await res.json();
    if (!data.length) throw new Error('City not found');
    return { lat: data[0].lat, lon: data[0].lon, name: data[0].name };
}

async function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Weather data could not be fetched');
    return res.json();
}

form.addEventListener('submit', async e => {
    e.preventDefault();
    result.textContent = 'Loading...';
    try {
        const city = cityInput.value.trim();
        if (!city) throw new Error('Please enter a city name');
        const { lat, lon, name } = await getCoordinates(city);
        const data = await getWeather(lat, lon);
        const temp = data.current.temp;
        const desc = data.current.weather[0].description;
        result.textContent = `${name}: ${temp.toFixed(1)} °C, ${desc}`;
    } catch (err) {
        result.textContent = 'Error: ' + err.message;
        console.error('Weather App Error:', err);
    }
});

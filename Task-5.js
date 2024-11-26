// Your OpenWeatherMap API key (replace this with your own API key)
const apiKey = 'YOUR_API_KEY';

// Function to fetch weather data based on the user location or input
function getWeather() {
    let location = document.getElementById('location').value;
    
    if (location === '') {
        alert("Please enter a location!");
        return;
    }

    // Get weather by city name
    fetchWeather(location);
}

// Function to fetch weather data from OpenWeatherMap
function fetchWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => {
            alert("Error fetching weather data: " + error);
        });
}

// Function to display the fetched weather data
function displayWeather(data) {
    const locationName = document.getElementById('location-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');
    
    // Check if the location is valid
    if (data.cod === '404') {
        alert("Location not found. Please try again.");
        return;
    }
    
    // Display the weather data
    locationName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `${data.main.temp}°C`;
    description.textContent = data.weather[0].description;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    
    // Show the weather information section
    document.querySelector('.current-weather').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
    const cityInput = document.getElementById("cityInput");
    const getWeatherBtn = document.getElementById("getWeatherBtn");
    const weatherInfo = document.getElementById("weatherInfo");
    const weatherCity = weatherInfo.querySelector("h2");
    const weatherDescription = weatherInfo.querySelector("p");
  
    getWeatherBtn.addEventListener("click", () => {
      const city = cityInput.value.trim();
      if (city !== "") {
        getWeather(city);
        cityInput.value = "";
      }
    });
  
    async function getWeather(city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
      try {
        const response = await fetch(url);
        const data = await response.json();
  
        if (response.ok) {
          showWeather(data);
        } else {
          showError(data.message);
        }
      } catch (error) {
        showError("An error occurred. Please try again later.");
      }
    }
  
    function showWeather(data) {
      const cityName = data.name;
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
  
      weatherCity.textContent = cityName;
      weatherInfo.style.display = "block";
      weatherDescription.textContent = `Weather: ${weatherDescription}, Temperature: ${temperature}°C`;
    }
  
    function showError(message) {
      weatherInfo.style.display = "none";
      alert(message);
    }
  });
  
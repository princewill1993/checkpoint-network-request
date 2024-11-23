const weatherForm = document.querySelector("#weatherForm");
const cityInput = document.querySelector("#city");
const weatherResult = document.querySelector("#weatherResult");
const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const LOADER = document.querySelector("#loader");
const SUBMIT_BTN = document.querySelector("#btn-get-weather");

SUBMIT_BTN.addEventListener("click", async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  LOADER.innerHTML = "Fetching city name...!!!";
  if (city.length < 2) {
    alert("Please provide a city name");
  }
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=lagos,ng&APPID=da7359de150faee19a110ed81f75b437"
    );
    if (response.data.error === "City not found") {
      alert(`Search for the city name: ${cityName}, was not found`);
    }
    const data = await response.data;
    displayWeather(data);
  } catch (err) {
    alert(err.message);
  } finally {
    LOADER.innerHTML = "";
  }
});

const displayWeather = (data) => {
  weatherResult.classList.remove("hidden");
  cityName.innerHTML = `Weather in ${data.name}, ${data.sys.country}`;
  temperature.innerHTML = `Temperature: ${data.main.temperature}`;
  description.innerHTML = `Weather condition: ${data.weather[0].description}`;
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
  wind.innerHTML = `Wind Speed:${data.wind.speed}m/s`;
};

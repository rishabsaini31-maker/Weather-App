const API_KEY = "YOUR_API_KEY"; // get from openweathermap.org

async function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (!city) return;

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await res.json();

    document.getElementById("city").innerText = data.name;
    document.getElementById("temp").innerText = data.main.temp + "°C";
    document.getElementById("desc").innerText = data.weather[0].description;

  } catch (err) {
    console.log(err);
  }
}

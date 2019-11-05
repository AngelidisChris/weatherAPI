class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.winds = document.getElementById("w-winds");
  }

  paint(weather) {
    this.location.textContent = weather.city_name + " " + weather.country_code;
    this.desc.textContent = weather.weather.description;
    this.string.textContent = weather.temp + " C";
    this.icon.setAttribute(
      "src",
      `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`
    );
    this.humidity.textContent = `Relative humidity: ${weather.rh}` + "%";
    this.feelsLike.textContent = `Feels Like: ${weather.app_temp}` + " C";
    this.dewpoint.textContent = `DewPoint: ${weather.dewpt}` + " C";
    this.winds.textContent =
      `Wind: From the ${weather.wind_cdir} ${weather.wind_spd}` + " m/s";
  }
}

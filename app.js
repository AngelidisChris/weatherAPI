// init storage
const storage = new Storage();

// get stored location data
const weatherLocation = storage.getLocationData();
console.log(weatherLocation);
// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// init ui
const ui = new UI();

// get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather(weatherLocation.city, weatherLocation.country));

// change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;
 
  weather.changeLocation(city, country);
  
  // get and display weather
  getWeather(city, country);

  // close modal
  $("#locModal").modal("hide");
});

function getWeather(city,country) {
  weather
    .getWeather()
    .then(results => {
      // change location in LS
      storage.setLocationData(city, country);
      ui.paint(results);
    })
    .catch(
      err => console.log(err)
    );
}

class Weather {
  constructor(city, country) {
    this.apiKey = "92e50317333d4879933c23adddc393bd";
    this.city = city;
    this.country = country;
  }

  // fetch weather from API
  async getWeather() {
    console.log(this.city);
    console.log(this.country);
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/current?city=${this.city}&key=${this.apiKey}`
    );
    const responseData = await response.json();

    return responseData.data[0];
  }

  // change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}

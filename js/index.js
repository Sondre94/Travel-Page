let weather = {
    "apiKey": "bc84d4bcce8f60073e0feb68d439aa24",
    fetchWeather: function () {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?lat=-8.409518&lon=115.188919&appid=bc84d4bcce8f60073e0feb68d439aa24&units=metric'
            )
        .then((response) => response.json())
        .then ((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const {icon, description} = data.weather[0]
        const {temp, humidity} = data.main;
        const {speed} = data.wind
        console.log(icon, description, temp, humidity, speed)
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.degree').innerText = temp + '°C';
        document.querySelector('.humidity').innerText = 'Humidity:' + humidity + '%';
        document.querySelector('.wind').innerText = 'Wind: ' + speed + 'km/h';
    }
}

weather.fetchWeather()

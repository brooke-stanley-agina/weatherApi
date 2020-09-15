class Weather{
    constructor(city){
        this.apiKey = '312b2f2f3052a47471ff906330c2cf08';
        this.city = city;
    }
    //Fetch weather from API
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    //change weather location
    changeLocation(city){
        this.city = city;
    }
}


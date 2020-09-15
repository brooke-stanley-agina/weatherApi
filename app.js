
const weather = new Weather('Protaras');

document.addEventListener('DOMContentLoaded', getWeather)

function getWeather(){
weather.getWeather()
    .then(function(results){
        console.log(results);
        for(let i = 0; i<results.list.length; i+=8){
            console.log(results.list[i].dt_txt,
                        results.list[i].weather[0],
                        results.list[i].main)
        }
    })
    .catch(err => console.log(err));

}


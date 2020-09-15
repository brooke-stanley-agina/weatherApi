
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

// function weatherBalloon( cityID ) {
//     var key = '6ea4de1713e242df21e301436d76c584';
//     fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
//     .then(function(resp) { return resp.json() }) // Convert data to json
//     .then(function(data) {
//       console.log(data);
//     })
//     .catch(function() {
//       // catch any errors
//     });
//   }
  
//   window.onload = function() {
//     weatherBallon( 6167865 );
//   }
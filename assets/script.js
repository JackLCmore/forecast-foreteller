function obtainWeatherData (){

var openWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + locationLat + "&lon=" + locationLong + "&appid=24a5a13015fbcc24cbb0b4bb4df39aef";
var locationLat = "";
var locationLong = "";

locationLong = 124.16;
locationLat = 40.80;

fetch(openWeatherURL)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
});
};

obtainWeatherData();
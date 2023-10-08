

// var geoCodingURL = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=24a5a13015fbcc24cbb0b4bb4df39aef";

// var openWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + locationLat + "&lon=" + locationLon + "&appid=24a5a13015fbcc24cbb0b4bb4df39aef";

// var location = ""

// fetch(geoCodingURL)
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     localStorage.setItem('LondonLat',data[0].lat);
//     localStorage.setItem('LondonLon',data[0].lon);
//     console.log(data[0].lat);
//     console.log(data[0].lon);
//     return;
// });

// var locationLat = data[0].lat
// var locationLon = data[0].lon

// console.log(locationLat);
// console.log(locationLon);

$(".btn").on("click", function(event){
event.preventDefault();
var location = $(this).siblings(".form-control").val();
var openWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ location + "&cnt=5&appid=24a5a13015fbcc24cbb0b4bb4df39aef"
fetch(openWeatherURL)
.then(function(response){
    return response.json();
})
.then(function(data){
    // var weatherDescrip = data.list.weather[0].description;
    // var locationDate = data.list.dt_txt;
    // var locationTemp = data.list.main.temp;
    // var locationHumidity = data.list.main.humidity;
    // var locationWindSpd = data.list.wind.speed;
    var locationName = data.city.name;
    $(".history").append("<li class='list-group-item'>"+ locationName +"</li>")
    console.log(data)
    console.log(data.list);
    $(data.list).each(function(){
        console.log(this.weather[0].description);
        console.log(this.dt_txt);
        console.log(this.main.temp);
        console.log(this.main.humidity);
        console.log(this.wind.speed);
    });
});
});
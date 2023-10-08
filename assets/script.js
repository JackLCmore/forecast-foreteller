
$(".btn").on("click", function(event){
event.preventDefault();
var location = $(this).siblings(".form-control").val();
var openWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ location + "&cnt=5&appid=24a5a13015fbcc24cbb0b4bb4df39aef"
fetch(openWeatherURL)
.then(function(response){
    return response.json();
})
.then(function(data){

    var locationName = data.city.name;

   if($(".active")){
    $("li").removeClass("active");
   }

    $(".history").append("<li class='list-group-item active city-bar'>"+ locationName +"</li>")
    
    $(data.list).each(function(){
     
    var weatherDescrip = this.weather[0].description;
    var locationDate = this.dt_txt;
    var locationTemp = parseFloat(this.main.temp - 273.15).toFixed(2);
    // temp came up as kelvin, subtracting 273.15 gives back celsius
    var locationHumidity = this.main.humidity;
    var locationWindSpd = this.wind.speed;
    
    $(".table").find(".day").each(function(){
        $(this).text(locationDate);
    })
    $(".table").find(".day").siblings(".condition").each(function(){
        $(this).text(weatherDescrip);
    })
    $(".table").find(".day").siblings(".temperature").each(function(){
        $(this).text(locationTemp);
    })
    $(".table").find(".day").siblings(".humidity").each(function(){
        $(this).text(locationHumidity);
    })
    $(".table").find(".day").siblings(".wind-speed").each(function(){
        $(this).text(locationWindSpd);
    })
    })
    console.log(data);
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
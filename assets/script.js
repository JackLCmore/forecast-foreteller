$(".btn").on("click", function(event){

event.preventDefault();

var location = $(this).siblings(".form-control").val();

var openWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ location + "&cnt=37&appid=24a5a13015fbcc24cbb0b4bb4df39aef"

localStorage.setItem("localSearch", location);

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
    
    $(data.list[4]).each(function(){
     
    var weatherDescrip = this.weather[0].description;
    var locationDate = this.dt_txt;
    var locationTemp = parseFloat(this.main.temp - 273.15).toFixed(2);
    // temp came up as kelvin, subtracting 273.15 gives back celsius
    var locationHumidity = this.main.humidity;
    var locationWindSpd = this.wind.speed;

    $(".day1").text(locationDate);
    $(".condition1").text(weatherDescrip);
    $(".temperature1").text(locationTemp);
    $(".humidity1").text(locationHumidity);
    $(".wind-speed1").text(locationWindSpd);
        $(data.list[12]).each(function(){
     
        var weatherDescrip = this.weather[0].description;
        var locationDate = this.dt_txt;
        var locationTemp = parseFloat(this.main.temp - 273.15).toFixed(2);
        // temp came up as kelvin, subtracting 273.15 gives back celsius
        var locationHumidity = this.main.humidity;
        var locationWindSpd = this.wind.speed;
    
        $(".day2").text(locationDate);
        $(".condition2").text(weatherDescrip);
        $(".temperature2").text(locationTemp);
        $(".humidity2").text(locationHumidity);
        $(".wind-speed2").text(locationWindSpd);
            $(data.list[20]).each(function(){
     
            var weatherDescrip = this.weather[0].description;
            var locationDate = this.dt_txt;
            var locationTemp = parseFloat(this.main.temp - 273.15).toFixed(2);
            // temp came up as kelvin, subtracting 273.15 gives back celsius
            var locationHumidity = this.main.humidity;
            var locationWindSpd = this.wind.speed;
    
            $(".day3").text(locationDate);
            $(".condition3").text(weatherDescrip);
            $(".temperature3").text(locationTemp);
            $(".humidity3").text(locationHumidity);
            $(".wind-speed3").text(locationWindSpd);
                $(data.list[28]).each(function(){
        
                var weatherDescrip = this.weather[0].description;
                var locationDate = this.dt_txt;
                var locationTemp = parseFloat(this.main.temp - 273.15).toFixed(2);
                // temp came up as kelvin, subtracting 273.15 gives back celsius
                var locationHumidity = this.main.humidity;
                var locationWindSpd = this.wind.speed;
            
                $(".day4").text(locationDate);
                $(".condition4").text(weatherDescrip);
                $(".temperature4").text(locationTemp);
                $(".humidity4").text(locationHumidity);
                $(".wind-speed4").text(locationWindSpd);
                    $(data.list[36]).each(function(){
            
                        var weatherDescrip = this.weather[0].description;
                        var locationDate = this.dt_txt;
                        var locationTemp = parseFloat(this.main.temp - 273.15).toFixed(2);
                        // temp came up as kelvin, subtracting 273.15 gives back celsius
                        var locationHumidity = this.main.humidity;
                        var locationWindSpd = this.wind.speed;
                    
                        $(".day5").text(locationDate);
                        $(".condition5").text(weatherDescrip);
                        $(".temperature5").text(locationTemp);
                        $(".humidity5").text(locationHumidity);
                        $(".wind-speed5").text(locationWindSpd);
});
});
});
});
});
});
});

function getItem(){
    var retriever = localStorage.getItem("localSearch");
    $(".form-control").val(retriever);
}
getItem();
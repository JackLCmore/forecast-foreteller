
$(".btn").on("click", function(event){
event.preventDefault();
var location = $(this).siblings(".form-control").val();
var openWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ location + "&cnt=37&appid=24a5a13015fbcc24cbb0b4bb4df39aef"
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

    $(".table").find(".day1").each(function(){
        $(this).text(locationDate);
    })
    $(".table").find(".condition1").each(function(){
        $(this).text(weatherDescrip);
    })
    $(".table").find(".temperature1").each(function(){
        $(this).text(locationTemp);
    })
    $(".table").find(".humidity1").each(function(){
        $(this).text(locationHumidity);
    })
    $(".table").find(".wind-speed1").each(function(){
        $(this).text(locationWindSpd);
    })
        $(data.list[12]).each(function(){
     
        var weatherDescrip = this.weather[0].description;
        var locationDate = this.dt_txt;
        var locationTemp = parseFloat(this.main.temp - 273.15).toFixed(2);
        // temp came up as kelvin, subtracting 273.15 gives back celsius
        var locationHumidity = this.main.humidity;
        var locationWindSpd = this.wind.speed;
    
        $(".table").find(".day2").each(function(){
            $(this).text(locationDate);
        })
        $(".table").find(".condition2").each(function(){
            $(this).text(weatherDescrip);
        })
        $(".table").find(".temperature2").each(function(){
            $(this).text(locationTemp);
        })
        $(".table").find(".humidity2").each(function(){
            $(this).text(locationHumidity);
        })
        $(".table").find(".wind-speed2").each(function(){
            $(this).text(locationWindSpd);
        })
        })
            $(data.list[20]).each(function(){
     
            var weatherDescrip = this.weather[0].description;
            var locationDate = this.dt_txt;
            var locationTemp = parseFloat(this.main.temp - 273.15).toFixed(2);
            // temp came up as kelvin, subtracting 273.15 gives back celsius
            var locationHumidity = this.main.humidity;
            var locationWindSpd = this.wind.speed;
    
            $(".table").find(".day3").each(function(){
            $(this).text(locationDate);
            })
            $(".table").find(".condition3").each(function(){
            $(this).text(weatherDescrip);
            })
            $(".table").find(".temperature3").each(function(){
            $(this).text(locationTemp);
            })
            $(".table").find(".humidity3").each(function(){
            $(this).text(locationHumidity);
            })
            $(".table").find(".wind-speed3").each(function(){
            $(this).text(locationWindSpd);
            })
                $(data.list[28]).each(function(){
        
                var weatherDescrip = this.weather[0].description;
                var locationDate = this.dt_txt;
                var locationTemp = parseFloat(this.main.temp - 273.15).toFixed(2);
                // temp came up as kelvin, subtracting 273.15 gives back celsius
                var locationHumidity = this.main.humidity;
                var locationWindSpd = this.wind.speed;
            
                $(".table").find(".day4").each(function(){
                    $(this).text(locationDate);
                })
                $(".table").find(".condition4").each(function(){
                    $(this).text(weatherDescrip);
                })
                $(".table").find(".temperature4").each(function(){
                    $(this).text(locationTemp);
                })
                $(".table").find(".humidity4").each(function(){
                    $(this).text(locationHumidity);
                })
                $(".table").find(".wind-speed4").each(function(){
                    $(this).text(locationWindSpd);
                })
                    $(data.list[36]).each(function(){
            
                        var weatherDescrip = this.weather[0].description;
                        var locationDate = this.dt_txt;
                        var locationTemp = parseFloat(this.main.temp - 273.15).toFixed(2);
                        // temp came up as kelvin, subtracting 273.15 gives back celsius
                        var locationHumidity = this.main.humidity;
                        var locationWindSpd = this.wind.speed;
                    
                        $(".table").find(".day5").each(function(){
                            $(this).text(locationDate);
                        })
                        $(".table").find(".condition5").each(function(){
                            $(this).text(weatherDescrip);
                        })
                        $(".table").find(".temperature5").each(function(){
                            $(this).text(locationTemp);
                        })
                        $(".table").find(".humidity5").each(function(){
                            $(this).text(locationHumidity);
                        })
                        $(".table").find(".wind-speed5").each(function(){
                            $(this).text(locationWindSpd);
                        })
});
});
});
});
});
});
# Forecast Foreteller

## Table of Contents

* [Deployed Site](deployed-site)
* [Purpose](purpose)
* [Learning Points](learning-points)
* [Expectation vs Reality](expectation-vs-reality)
* [Resources Used](resources-used)
* [Contact Info](contact-info)

## Deployed Site

[Visit the Deployed Site!](https://jacklcmore.github.io/forecast-foreteller/)

![img](assets/images/Screenshot%202023-10-09%20145431.png)

## Purpose

The purpose of this project was to implement javascript fundamentals I have been learning and to layer the use of server-side APIs alongside those fundamentals.

## Learning Points

```

var locationName = data.city.name;

   if($(".active")){
    $("li").removeClass("active");
   }

    $(".history").append("<li class='list-group-item active city-bar'>"+ locationName +"</li>");

```
These lines of code allow for location headers to become 'selected and active' whenever a new location is typed into the search bar. While a small and honestly unneccesary addition, I am very proud of this UI piece.

```

var location = $(this).siblings(".form-control").val();

var openWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ location + "&cnt=37&appid=24a5a13015fbcc24cbb0b4bb4df39aef"

localStorage.setItem("localSearch", location);

```

This snippet is representative of the sites ability to take in a search input and output an API link for the inputted location. This is an extremely necessary portion of code for using any kind of dynamic API functionality.

## Expectation vs Reality

This was another project I had expected to be a lot harder than it ended up panning out for me.

Using server-side APIs is new for me and the implementation of them onto a website was scary.

After navigating through the open weather API json object and picking out the bits of information I wanted to display on my page it was as simple for me as building a site around the use of those pointers.

## Resources Used

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [jQuery](https://learn.jquery.com)
* [OpenWeatherAPI](https://openweathermap.org/api)
* [Bootstrap](https://getbootstrap.com)

## Contact Info

* [Email] (jack.lcmore@gmail.com)
* [Phone#] ((808)640-4366)
* [GitHub] (https://github.com/JackLCmore)
* [LinkedIn] (https://www.linkedin.com/in/jack-seymour-b0b2b0292/)
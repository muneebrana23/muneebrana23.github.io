
var qurl="https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=5b784b1f48f84d950ec5c13ba516dbea";
  
 $.getJSON(qurl, function(weatherData){
 var val=weatherData.main.temp; 
 switch(true)
  {
case (0 <= val && val <= 32): $('#theDiv').prepend('<img id="theImg" src="https://res.cloudinary.com/dzrjijwxf/image/upload/v1517993197/cqurrjktdpr2xisb8g5s.png" />'); break;
      
case (32 < val && val <= 50): $('#theDiv').prepend('<img id="theImg" src="https://res.cloudinary.com/dzrjijwxf/image/upload/v1517995305/kta4ikxykz1tebenwjfg.svg" />'); break;
 }
   
 $('.temp').html(weatherData.main.temp +" F");
 $(".city").html(weatherData.name);
 $(".speed").html(weatherData.wind.speed);
 $(".desc").html(weatherData.weather[0].description);
  });
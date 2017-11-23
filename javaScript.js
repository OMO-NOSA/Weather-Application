$(document).ready(function(){
      
      if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      var cel = false; 
      //var data;

     function displayTemp(num, c){
        if(c) return Math.round((num-32) * (5/9)) + "&deg C";

        return Math.round(num )+ "&deg F";
      } 
     
      
        
        const apiUrl ="https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/430b536abe559f82a059c75e4f689825/"+lat +","+lon;
        $.getJSON(apiUrl,function(data){
        var summ = data.currently.summary;
        var icon = data.currently.icon;
        var temp = displayTemp(data.currently.temperature);
        var windDirection = data.currently.windBearing;
        var windSpeed = data.currently.windSpeed;
        var timeZone = data.timezone;


        $("#summary").html(summ +
                '<br><canvas class="' + icon + '" width="50" height="50"></canvas>');
        $("#temp").html(temp);
        if (windSpeed > 1) {
                $('#wind').html('Wind: ' + windDirection + ' @ ' + windSpeed + ' MPH');
            }
        //$("#wind").html(windSpeed);
        var date = new Date();
        date = date.toString();
        $("#date").html(date);
        $("#time").html( '<br>'+ timeZone);
        $("#icon").html('It will ' +icon +'<br> in ' + timeZone);
        $(".btn").click(function(){
          displayTemp();

          });
      
  
       var img =["url(https://images.designtrends.com/wp-content/uploads/2016/02/28115049/Winter-Snow-Desktop-Wallpaper.jpg)",
               "url(http://wallpapercave.com/wp/doNuhh5.jpg)",
               "url(http://miriadna.com/desctopwalls/images/max/Mystic-clouds.jpg)",
               "url(http://hdwplan.com/wp-content/uploads/2016/04/stunning-desktop-wallpaper.jpeg)",
               "url(http://wallpapercave.com/wp/doNuhh5.jpg)"
               ];
   
       switch(icon){
         case "rain":
           $("body").css("background-image", img[1]);
           break;
         case "clear-day":
           $("body").css("background-image", img[3]);
           break;
         case "snow":
           $("body").css("background-image", img[0]);
           break;
           
         case "cloudy":
           $("body").css("background-image", img[2]);
           break;
         case "partly Cloudy":
           $("body").css("background-image", img[4]);
            break;
                  } 
      
      
  var icons = new Skycons({"color": "white"}),
      list  = [
        "clear-day", "clear-night", "partly-cloudy-day",
        "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
        "fog"
      ],
      i;

  for(i = list.length; i--; ) {
      var weatherType = list[i],
    elements = document.getElementsByClassName( weatherType );
      console.log(elements);
  for (e = elements.length; e--;){
    icons.set( elements[e], weatherType );
    }
  }

  icons.play();
        
    });

    });

 } 
  
});


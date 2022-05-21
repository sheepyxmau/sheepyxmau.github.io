var APPID = "1a5840823ced3a26d3087be90dbb4989";
var icon;
var temp;
var loc;
var temScale;
var button;
var img1;
var scene;
var tempf;
var tempc;
var rannumber;
var rannumber2;
var imgtext;
var hotlines = [];
hotlines[0] = "'GOO GOO GAA' *Sweats*";
hotlines[1] = "Lemmie does not like this hot weather but will take it";
hotlines[2] = "Lemmie is all set for a warm day!";
hotlines[3] = "Lemmie dresses light to battle this warm weather";
hotlines[4] = "Lemmie is confused, what is this hot day";
hotlines[5] = "'Hey human, come here. What is this warmness. Tell me.''";
var coldlines = [];
coldlines[0] = "'Heh!''";
coldlines[1] = "'Hmmm'";
coldlines[2] = "*chattering teeth*";
coldlines[3] = "'Am all dressed up'";
coldlines[4] = "'Am want warm blankie'";
coldlines[5] = "'Do not disturb me in this cold weather'";
var pleasantlines = [];
pleasantlines[0] = "'Am like this!'";
pleasantlines[1] = "'Take me outside'";
pleasantlines[2] = "Lemmie is happy in this pleasant weather";
pleasantlines[3] = "Lemmie very very happy because she is neither cold nor too hot";
pleasantlines[4] = "Lemmie would like to sit and take a minute to enjoy this beautiful day!";
pleasantlines[5] = "'hehehe, am likes'";
var rainylines = [];
rainylines[0] = "Lemmie is confused because of the rains";
rainylines[1] = "Lemmie is excited to see the rain";
rainylines[2] = "Lemmie is bored because of the rain";
rainylines[3] = "Lemmie would like to lounge about on such a lazy day";
rainylines[4] = "Lemmie would like to escape from these rains";
rainylines[5] = "Lemmie notices you noticing her on this wet day";

function sendRequest(url) {
 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
   var data = JSON.parse(xmlhttp.responseText);
   var weather = {};
   weather.icon = data.weather[0].icon;
   weather.loc = data.name;
   weather.temp = K2F(data.main.temp);
   scene = String(data.weather[0].main);
   tempc = Math.floor(fToC(K2F(data.main.temp)));
   tempf = Math.floor(K2F(data.main.temp));
   console.log(scene);


   update(weather);
   rannumber = Math.floor(Math.random() * 9) + 1;
   rannumber2 = Math.floor(Math.random() * 6);
   if(scene=="Thunderstorm"||scene=="Drizzle"||scene=="Rain"){

     img1.src = "./rainy/rainy"+rannumber+".jpeg";
     imgtext.innerHTML = rainylines[rannumber2];
   }
   else{
     if(tempc>35){

       img1.src = "./hot/hot"+rannumber+".jpeg";
       imgtext.innerHTML = hotlines[rannumber2];
     }
     else if(tempc<25){

       img1.src = "./cold/cold"+rannumber+".jpeg";
       imgtext.innerHTML = coldlines[rannumber2];
     }
     else{

       img1.src = "./pleasant/pleasant"+rannumber+".jpeg";
       imgtext.innerHTML = pleasantlines[rannumber2];

     }
   }
  }
 };

 xmlhttp.open("GET", url, true);
 xmlhttp.send();
}

function update(weather) {
 temp.innerHTML = tempc;
 loc.innerHTML = weather.loc;
 icon.src = "https://openweathermap.org/img/w/" + weather.icon +".png";
}

window.onload = function() {
 icon = document.getElementById("icon");
 temp = document.getElementById("temp");
 loc = document.getElementById("loc");
 temScale = document.getElementById("temScale");
 button = document.getElementById("button");
 img1 = document.getElementById("img1");
 imgtext = document.getElementById("imgtext");


  if(navigator.geolocation){
    var showPosition = function(position){
      updateByGeo(position.coords.latitude, position.coords.longitude);
    }
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  // toggle the temperature scale
  button.addEventListener("click", toggleScale);
  img1.addEventListener("click", toggleLemmie);



}

function updateByGeo(lat, lon) {
  var url ="https://api.openweathermap.org/data/2.5/weather?" +
  "lat=" + lat +
  "&lon=" + lon +
  "&APPID=" + APPID;
  sendRequest(url);
}

function K2F(k){
    return (9/5 * (k-273) + 32);
}

function cToF(celsius) {
  return (celsius * 9 / 5 + 32);
}

function fToC(fahrenheit) {
  return ((fahrenheit - 32) * 5 / 9);
}

function toggleScale() {
  if (temScale.innerHTML === "°C") {
    temp.innerHTML = tempf;
    temScale.innerHTML = "°F";
  } else if (temScale.innerHTML === '°F') {
    temp.innerHTML = tempc;
    temScale.innerHTML = "°C";
  }
}

function toggleLemmie(){
  rannumber = Math.floor(Math.random() * 9) + 1;
  rannumber2 = Math.floor(Math.random() * 6);
  if(scene=="Thunderstorm"||scene=="Drizzle"||scene=="Rain"){

    img1.src = "./rainy/rainy"+rannumber+".jpeg";
    imgtext.innerHTML = rainylines[rannumber2];
  }
  else{
    if(tempc>35){

      img1.src = "./hot/hot"+rannumber+".jpeg";
      imgtext.innerHTML = hotlines[rannumber2];
    }
    else if(tempc<25){

      img1.src = "./cold/cold"+rannumber+".jpeg";
      imgtext.innerHTML = coldlines[rannumber2];
    }
    else{

      img1.src = "./pleasant/pleasant"+rannumber+".jpeg";
      imgtext.innerHTML = pleasantlines[rannumber2];

    }
  }
}

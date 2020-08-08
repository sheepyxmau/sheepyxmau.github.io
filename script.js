$("#entry-button").click(function(){
  $("#entry").fadeOut(500);
  $("#main").fadeIn(3000);
});

$("#entry-button").hover(function(){
  $("#entry-button").animate({backgroundColor:"#55b5a9"},100);
});
$("#entry-button").mouseleave(function(){
  $("#entry-button").animate({backgroundColor:"#2A9D8F"},100);
});

$("#notk").hover(function(){
  $("#notk").animate({backgroundColor:"#1c8c2d"},50);
});
$("#notk").mouseleave(function(){
  $("#notk").animate({backgroundColor:"#11541b"},50);
});

$("#key").hover(function(){
  $("#key").animate({backgroundColor:"#24b36e"},50);
});
$("#key").mouseleave(function(){
  $("#key").animate({backgroundColor:"#115434"},50);
});

$("#key").click(function(){
  window.open("key.html","_self");
});
$("#notk").click(function(){
  window.open("model.html","_self");
});

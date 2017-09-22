
function get_weather() {
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(data){
  $("#show_weather").append('<li>'+"Country: "+data.query.results.channel.location.country+'</li>');
});
};
// $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(data){
// $("show_weather").html(data)
// })

// function get_weather() {
//
//   $("#show_weather").html("helloo it works");
//
// };

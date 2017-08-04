$(document).ready(function() {
  
  var twitchUserNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  
  var getTwitchData = function() {
    
    

    var baseURL = "https://wind-bow.gomix.me/twitch-api";
    var action = "action=opensearch";
    var search = "search=";
    var titles = "titles=";
    var format = "format=json";
    var callback = "callback=?";
    var api =
      baseURL +
      action +
      "&" +
      search +
      searchTerm +
      "&" +
      format +
      "&" +
      callback;

    
    $.ajax({
      type: "GET",
      url: api,
      jsonp: "callback",
      dataType: "jsonp",
      error: function(data) {
        alert("API didn't work");
      },
      success: function(data) {
        
        }
      });
  };

  

 
});
//Start of JQuery when document loads
$(document).ready(function() {
  //base URL for all getJSON calls
  var baseURL = "https://wind-bow.gomix.me/twitch-api/";
  //base URL for twitch tv links
  var twitchBaseURL = "https://www.twitch.tv/"
  //variable to keep next channel HTML to add to display

  //array containing all channel names
  var channels = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas"
  ];

  //returns proper URL to request a specific data from a specific channel
  function requestURL(type, channel) {
    return baseURL + type + "/" + channel + "?callback=?";
  }

  function display(logo, URL, channelName, description, status) {
    var newHTML =
      "<div class='w3-row w3-red'>" +
      "<div class='w3-third w3-yellow'>" +
      "<img src='" +
      logo +
      "'>" +
      "<a href='" +
      URL +
      "' target='_blank'>" +
      channelName +
      "</a>" +
      "</div>" +
      "<div class='w3-two-thirds w3-blue'>" +
      description +
      "</div>" +
      "</div>";

    $("#all").append(newHTML);

    //if channel is online add its information to the onine tab
    if (status === "online") {
      $("#online").append(newHTML);
    } else {
      //if channel is offline add it information to offline tab
      $("#offline").append(newHTML);
    }
  }

  //loop runs through each channel name in channels array and gets status from TwitchTV server with nested getJSON request
  channels.forEach(function(channelName) {
    $.getJSON(requestURL("streams", channelName), function(data1) {
      console.log(data1);
      var logo, status, description, URL;

      if (data1.stream === null) {
        status = "offline";
        description = "Channel currently offline";
        logo = "http://cdn.onlinewebfonts.com/svg/img_107628.svg";
        display(logo, twitchBaseURL + channelName, channelName, description, status);
      } else {
        //if stream is online

        status = "online";
        //call channels .getJSON request for more information
        $.getJSON(requestURL("channels", channelName), function(data2) {
          logo = data2.logo;
          URL = data2.url;
          description = data2.status;
          display(logo, URL, channelName, description, "online");
        });
      }
    });
  });
});

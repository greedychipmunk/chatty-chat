function getParams() {
  var queryString = window.location.search;

  // Check if there are parameters in the query string
  if (queryString) {
    // Remove the leading "?" character
    queryString = queryString.substring(1);

    // Split the query string into an array of parameter key-value pairs
    var params = queryString.split("&");

    // Create an object to store the parameters
    var paramObj = {};

    // Iterate through the parameter key-value pairs
    for (var i = 0; i < params.length; i++) {
      var param = params[i].split("=");
      var key = decodeURIComponent(param[0]);
      var value = decodeURIComponent(param[1]);

      // Store the parameter in the object
      paramObj[key] = value;
    }

    return paramObj;
  }
}

$(document).ready(function () {
  var socket = io();

  var sendBtn = $("#form #send-btn");
  var input = $("#form #input");

  var { nickname } = getParams();

  var chatMessages = [
    { user: "Jamal", msg: "Hello world" },
    { user: "Gavin", msg: "Yooooooo!!!" },
    { user: "Vega", msg: "Heeeeeeeeeyyyyyyyyy!!!" },
    { user: "Jamal", msg: "Hello world" },
    { user: "Gavin", msg: "Yooooooo!!!" },
    { user: "Vega", msg: "Heeeeeeeeeyyyyyyyyy!!!" },
    { user: "Jamal", msg: "Hello world" },
    { user: "Gavin", msg: "Yooooooo!!!" },
    { user: "Vega", msg: "Heeeeeeeeeyyyyyyyyy!!!" },
    { user: "Jamal", msg: "Hello world" },
    { user: "Gavin", msg: "Yooooooo!!!" },
    { user: "Vega", msg: "Heeeeeeeeeyyyyyyyyy!!!" },
    { user: "Jamal", msg: "Hello world" },
    { user: "Gavin", msg: "Yooooooo!!!" },
    { user: "Vega", msg: "Heeeeeeeeeyyyyyyyyy!!!" },
    { user: "Jamal", msg: "Hello world" },
    { user: "Gavin", msg: "Yooooooo!!!" },
    { user: "Vega", msg: "Heeeeeeeeeyyyyyyyyy!!!" },
    { user: "Jamal", msg: "Hello world" },
    { user: "Gavin", msg: "Yooooooo!!!" },
    { user: "Vega", msg: "Heeeeeeeeeyyyyyyyyy!!!" },
    { user: "Jamal", msg: "Hello world" },
    { user: "Gavin", msg: "Yooooooo!!!" },
    { user: "Vega", msg: "Heeeeeeeeeyyyyyyyyy!!!" },
    { user: "Jamal", msg: "Hello world" },
    { user: "Gavin", msg: "Yooooooo!!!" },
    { user: "Vega", msg: "Heeeeeeeeeyyyyyyyyy!!!" },
    { user: "Jamal", msg: "Hello world" },
    { user: "Gavin", msg: "Yooooooo!!!" },
    { user: "Vega", msg: "Heeeeeeeeeyyyyyyyyy!!!" },
  ];

  sendBtn.on("click", function (e) {
    e.preventDefault();
    if (input.val()) {
      socket.emit("chat message", { user: nickname, msg: input.val() });
      input.val("");
    }
  });

  $.get("/connectedUsers", function ({ connectedUsers }) {
    $("#users-online").text(connectedUsers.length);
  });

  chatMessages.map(({ user, msg }) => {
    if ("Gavin" == user) {
      $(
        "<div class='w-full flex justify-end'><div class='m-3 p-1 w-3/6'><div class='text-black text-right'>" +
          user +
          "</div><div class='bg-blue-700 p-5 text-white rounded-lg'>" +
          msg +
          "</div></div><div>"
      ).appendTo("#messages");
    } else {
      $(
        "<div class='w-full'><div class='m-3 p-1 w-3/6'><div class='text-black'>" +
          user +
          "</div><div class='bg-gray-500 p-5 text-white rounded-lg'>" +
          msg +
          "</div></div></div>"
      ).appendTo("#messages");
    }
  });
});

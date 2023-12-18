$(document).ready(function () {
  $("#nickname").on("keyup", function () {
    const nameLength = $("#nickname").val().length;
    if (nameLength < 4) {
      $("#disabled-button").show();
      $("#enabled-button").hide();
    }
    if (nameLength > 60) {
      $("#disabled-button").show();
      $("#enabled-button").hide();
    }
    if (nameLength >= 4 && nameLength <= 60) {
      $("#disabled-button").hide();
      $("#enabled-button").show();
    }
  });

  $("#enabled-button").on("click", function () {
    const nickname = $("#nickname").val();
    $.get("/login?nickname=" + nickname, function ({ user }) {
      console.log("Nickname sent: " + user);
      location.href = "/chat?nickname=" + user;
    });
  });
});

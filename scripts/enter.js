$(document).ready(function () {
  $("#nickname").on("keyup", function () {
    console.log("keyup", $("#nickname").val());
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
});

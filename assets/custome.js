$(document).ready(function () {
  $("#form-login #vusername").focus();
  $("#form-login #vusername").keyup(function (e) {
    setpass();
  });

  function setpass() {
    var pass = $("#form-login #vusername").val();
    $("#form-login #vpassword").val(pass);
  }
});

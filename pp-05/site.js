$(document).ready(function() {
  var doorbell = new Audio('media/doorbell.mp3');

  $("#ringbell-control").remove();

  function ringDoorbell() {
    $('#playing').show();
    doorbell.play();
  }

  $("#ringbell").on("click", function() {
    ringDoorbell();
  });

  $(document).on("keypress", function(event) {
    if(event.key === "d") {
      ringDoorbell();
    }
  });

  doorbell.addEventListener("ended", function(){
    doorbell.currentTime = 0;
    $('#playing').hide();
  });

});

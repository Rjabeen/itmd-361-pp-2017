$(document).ready(function() {
  $("#ringbell-control").remove();

  function ringDoorbell() {
    var doorbell = new Audio('media/doorbell.mp3');
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

});

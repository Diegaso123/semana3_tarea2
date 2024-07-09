$(function(){
    $("#btn").click(function() {
      $(this).text("Pulsado.")
    });
  });



  $(function(){
    $("#btn").on("click", function() {
      $("p").toggle("500", "linear")
    });
  });
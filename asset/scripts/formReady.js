$(document).ready(function(){

    $('#form').submit(function (event) {
        var formData = $('#form').serialize();
      

        $.ajax({
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScyUFH0shSRizZX4MeLE1e3isFvJ8XWnjdsM_dPrdDvaAxVUA/formResponse",
            data: formData,
            type: "POST",
            dataType: "xml",
           
            statusCode: {
              0: function () {
               
                $(".end-message").slideDown();
                $(".rounded-btn--blue").fadeOut();
                $(function(){
                  setTimeout(function(){
                    window.location.href = "../../thanks.html";
                  },1000);
                });
               
              },
              200: function () {
                $(".false-message").slideDown();
              }
            }
         
          });
          event.preventDefault();
        });

        $('#form2').submit(function (event) {
          var formData = $('#form2').serialize();
  
          $.ajax({
              url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScyUFH0shSRizZX4MeLE1e3isFvJ8XWnjdsM_dPrdDvaAxVUA/formResponse",
              data: formData,
              type: "POST",
              dataType: "xml",
              statusCode: {
                0: function () {
                  $(".end-message").slideDown();
                  $(".rounded-btn--blue").fadeOut();
                  $(function(){
                    setTimeout(function(){
                      window.location.href = "../../thanks.html";
                    },1000);
                  });
                },
                200: function () {
                  $(".false-message").slideDown();
                }
              }
            });
            event.preventDefault();
          });
    });



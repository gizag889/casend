$(document).ready(function(){


        const $form = $('#form');
        const $submitBtn = $('#js-submit');

        
  $('#form input,#form textarea').on('change', function () {
    if(
        $form.find('input[type="text"]').val() !== "" &&
        $form.find('input[type="email"]').val() !== "" &&
        $form.find('input[type="tel"]').val() !== "" 
      ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });

      const $form2 = $('#form2');
      const $submitBtn2 = $('#js-submit2');

      $('#form2, #form2 textarea').on('change', function(){
        if(
          $form2.find('input[type="text"]').val() !== "" &&
          $form2.find('input[type="email"]').val() !== "" &&
          $form2.find('input[type="tel"]').val() !== ""
        ){
          $submitBtn2.prop('disabled', false);
        }else {
          $submitBtn.prop('disabled', true);
        }
      });


          
         
        });

  
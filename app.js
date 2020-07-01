$('#login-page2').hide();

$('#circle1').click(function () {
  $('#circle1').fadeOut(function () {
    $('#login-page').fadeOut(function () {
      $('#login-page2').show(function () {
        function validateEmail(email) {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(email).toLowerCase());
        }

        $('#button').click(function () {
          if (validateEmail($('#email').val()) == false) {
            $('#wrong1').show();
            $('#correct1').hide();
          } else {
            $('#correct1').show();
            $('#wrong1').hide();
          }

          if ($.isNumeric($('#number').val()) == false) {
            $('#wrong2').show();
            $('#correct2').hide();
          } else {
            $('#correct2').show();
            $('#wrong2').hide();
          }

          if ($('#password').val() != $('#passwordConfirm').val()) {
            $('#wrong4').show();
            $('#correct4').hide();
          } else {
            $('#wrong4').hide();
            $('#correct4').show();
          }
        });
      });
    });
  });
});

$('#circle2').click(function () {
  $('#circle2').fadeOut(function () {
    $('#login-page').fadeOut(function () {
      alert('Osvježite stranicu ako se želite vratiti');
    });
  });
});

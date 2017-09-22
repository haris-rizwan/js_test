$('h1').hover(function() {
$( this ).toggleClass( "main" );
});

// $('#signin').click(function (e) {
//   e.preventDefault();
//   var form = $('#register :input');
//   console.log(form);
//   var name = $('#inputFName').val();
//   var lname= $('#inputLName').val();
//   var email = $('#inputEmail3').val();
//   var pass =$('#inputPassword3').val();
//   console.log(typeof(name),name.length);
//   textValidate(name);
//   textValidate(lname);
//   emailValidate(email);
//   passwordValidate(pass);
//
// });


$('#inputFName').focusout(function () {
  var name = $('#inputFName').val();
  textValidate(name);
});


//
// $('#inputLName').blur(function () {
//   var lname= $('#inputLName').val();
//   textValidate(lname);
// });

$('#inputEmail3').focusout(function () {
  var email = $('#inputEmail3').val();
  emailValidate(email);
});

//
$('#inputPassword3').focusout(function () {
  var pass =$('#inputPassword3').val();
  passwordValidate(pass);
});

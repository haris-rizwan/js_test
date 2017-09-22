function textValidate(value) {
  if ((value=="") && (value.length<34)) {
    $('#First_name').html('<div class="alert alert-danger" role="alert">Please Enter Name</div>');

  } else {
    $('#First_name').html('<div class="alert alert-success" role="alert">Thank You!</div>')
  }

};

function emailValidate(input) {
  var emailExpression =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var check = emailExpression.test(input);
  if (check!=true) {
    $('#Email').html('<div class="alert alert-danger" role="alert">Please Enter A Valid Email</div>');

  } else {
    $('#Email').html('<div class="alert alert-success" role="alert">Thank You!</div>')
  }

};

function passwordValidate(input) {
  var passwordExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  var checkPassword = passwordExpression.test(input);
  if (checkPassword!=true){
    $('#Password').html('<div class="alert alert-danger" role="alert">Password :Minimum eight characters, at least one uppercase letter, one lowercase letter, one number</div>');

  } else {
    $('#Password').html('<div class="alert alert-success" role="alert">Thank You!</div>')
  }

};

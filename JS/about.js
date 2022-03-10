window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-140px";
  }
}

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', () => {
  removeActiveClasses()
  panel.classList.add('active');
}))

function removeActiveClasses() {
  panels.forEach(panel => panel.classList.remove('active'))
}










const showError = function (input, message) {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};
const showSuccess = function (input) {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
};

function changef() {
  var text = document.getElementById("fname");

  text.style.textTransform = "capitalize"
  showSuccess(fname)
  var username = document.getElementById("fname").value;
  var letters = /^([A-Za-z\s]+)$/;
      if(!username.match(letters))
      {
    showError(fname, "*Enter valid name")
    return false;
  }
  else {
    showSuccess(fname);
  
    return true;
  }
}



function changest() {
  var text = document.getElementById("state");

  text.style.textTransform = "capitalize"

}
function changepv() {
  var text = document.getElementById("pv");

  text.style.textTransform = "capitalize"


}

function checkname() {

  var username = document.getElementById("fname").value;
  if (username.trim() == "") {
    showError(fname, "*Enter your name")
    return false;
  }
  else {
    showSuccess(fname);

    return true;
  }
}

function checkmail() {

  var email = document.getElementById("mail").value;
  if (email.trim() == "") {
    showError(mail, "*Enter your Email")
    return false;
  }
  else {
    showSuccess(mail);

    return true;
  }
}

function checkpwd1() {

  var pwd = document.getElementById("pwd1").value;
  if (pwd.trim() == "") {
    showError(pwd1, "*Enter a password")
    return false;
  }
  else {
    showSuccess(pwd1);

    return true;
  }
}
function checkpwd2() {

  var pwdc = document.getElementById("pwd2").value;
  if (pwdc.trim() == "") {
    showError(pwd2, "*Confirm password")
    return false;
  }
  else {
    showSuccess(pwd2);

    return true;
  }
}

function confirm() {
  var pwdc = document.getElementById("pwd2").value;
  var pwd = document.getElementById("pwd1").value;

  if (pwd !== pwdc) {
    showError(pwd2, "*Not matching")
    return false;
  }
  else {
    showSuccess(pwd2);
    return true
  }

}


function checknum() {

  var num = document.getElementById("inputNumber").value;
  if (num.trim() == "") {
    showError(inputNumber, "*Enter phone number")
    return false;
  }
  else {
    showSuccess(inputNumber);

    return true;
  }
}

function mailval() {
  var emailid = document.getElementById("mail").value;
  let regex = /^([A-Za-z0-9\.-\_]+)@([A-Za-z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
  if (regex.test(emailid)) {
    showSuccess(mail)
    return true
  }
  else {
    showError(mail, "*Enter valid email id")
    return false
  }
}
function numval() {
  var pnum = document.getElementById("inputNumber").value;
  let regex = /^([0-9]{3})([-\s\.])?([0-9]{3})([-\s\.])?([0-9]{4,6})$/
  let regex1 = /^([0-9]{10})$/
  let regex2 = /^([0-9]{3})-([0-9]{3})-([0-9]{4})$/
  let regex3 = /^([0-9]{3})\.([0-9]{3})\.([0-9]{4})$/
  let regex4 = /^([0-9]{3})\s([0-9]{3})\s([0-9]{4})$/

  if (regex1.test(pnum) || regex2.test(pnum) || regex3.test(pnum) || regex4.test(pnum)) {
    showSuccess(inputNumber)
    return true
  }
  else {
    showError(inputNumber, "*Enter valid phone number")
    return false
  }
}

function passwordChanged() {
  var strength = document.getElementById('strength');
  var strongRegex = new RegExp("^(?=.{10,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
  var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
  var enoughRegex = new RegExp("(?=.{8,}).*", "g");
  var pwd = document.getElementById("pwd1");
  // var myInput = document.getElementById("pwd1");
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");
  document.getElementById("message").style.display = "block";
  pwd.onfocus = function () {
    document.getElementById("message").style.display = "block";
  }
  // if (pwd.value.length == 0) {
  //     strength.innerHTML = 'Type Password';
  // } else if (false == enoughRegex.test(pwd.value)) {
  //     strength.innerHTML = 'More Characters';
  if (strongRegex.test(pwd.value)) {
    strength.innerHTML = "<small class='progress-bar bg-success' style='width: 100%'>Strong</small>";
  } else if (mediumRegex.test(pwd.value)) {
    strength.innerHTML = "<small class='progress-bar bg-warning' style='width: 66%'>Medium</small>";
  } else {
    strength.innerHTML = "<small class='progress-bar bg-danger' style='width: 33%'>Weak</small>";
  }
  lower();
  upper();
  leng();
  numb();


  function lower() {
    var lowerCaseLetters = /[a-z]/g;
    if (pwd.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
      return true
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
      return false;
    }
  }

  // Validate capital letters

  function upper() {
    var upperCaseLetters = /[A-Z]/g;
    if (pwd.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
      return true;
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
      return false;
    }
  }

  // Validate numbers

  function numb() {
    var numbers = /[0-9]/g;
    if (pwd.value.match(numbers)) {

      number.classList.remove("invalid");
      number.classList.add("valid");
      return true;
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
      return false;
    }
  }

  // Validate length
  function leng() {
    if (pwd.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
      return true;
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
      return false;
    }
  }
  if (leng() == false || upper() == false || lower() == false || numb() == false) {
    showError(pwd1,)
    return false;
  }
  else {
    showSuccess(pwd1)
    return true;
  }
}


// var myInput = document.getElementById("pwd1");
// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");

// // When the user clicks on the password field, show the message box
// myInput.onfocus = function() {
//   document.getElementById("message").style.display = "block";
// }

// // When the user clicks outside of the password field, hide the message box
// myInput.onblur = function() {
//   document.getElementById("message").style.display = "none";
// }

// // When the user starts to type something inside the password field
// myInput.onkeyup = function() {
//   // Validate lowercase letters
//   var lowerCaseLetters = /[a-z]/g;
//   if(myInput.value.match(lowerCaseLetters)) {  
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } else {
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
//   }

//   // Validate capital letters
//   var upperCaseLetters = /[A-Z]/g;
//   if(myInput.value.match(upperCaseLetters)) {  
//     capital.classList.remove("invalid");
//     capital.classList.add("valid");
//   } else {
//     capital.classList.remove("valid");
//     capital.classList.add("invalid");
//   }

//   // Validate numbers
//   var numbers = /[0-9]/g;
//   if(myInput.value.match(numbers)) {  
//     number.classList.remove("invalid");
//     number.classList.add("valid");
//   } else {
//     number.classList.remove("valid");
//     number.classList.add("invalid");
//   }

//   // Validate length
//   if(myInput.value.length >= 8) {
//     length.classList.remove("invalid");
//     length.classList.add("valid");
//   } else {
//     length.classList.remove("valid");
//     length.classList.add("invalid");
//   }
// }



function validate() {
  if (checkname() == false || checkmail() == false || checkpwd1() == false || checkpwd2() == false || confirm() == false || mailval() == false || checknum() == false || numval() == false || passwordChanged() == false || changef() == false) {
    return false;
  }
  else {
    return true;
  }
}
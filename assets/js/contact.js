var submitButton = document.getElementById("formSubmit");
var firstNameResult = document.getElementById("fName");
var lastNameResult = document.getElementById("lName");
var phoneNumResult = document.getElementById("phoneNumber");
var emailResult = document.getElementById("emailAddress");
var questionsResult = document.getElementById("questions");
var checkAgain = document.querySelector(".formvalid");

var required = document.querySelectorAll("label");
var formValidation = firstNameResult.addEventListener("blur", function() {
  // alert('hi');w
  if (firstNameResult.value.length <= 0) {
    // alert("WHY");

    submitButton.classList.add("error");
    submitButton.disabled = true;

    // return false;
    // firstName.classList.add("error");
  } else {
    submitButton.classList.remove("error");
    submitButton.disabled = false;
    return true;
  }
});
var formValidation = lastNameResult.addEventListener("blur", function() {
  // alert('hi');w
  if (lastNameResult.value.length <= 0) {
    // alert("WHY");

    submitButton.classList.add("error");
    submitButton.disabled = true;

    // return false;
    // firstName.classList.add("error");
  } else {
    submitButton.classList.remove("error");
    submitButton.disabled = false;
    // return true;
  }
});
var formValidation = phoneNumResult.addEventListener("blur", function() {
  // alert('hi');w
  if (phoneNumResult.value.length <= 0) {
    // alert("WHY");

    submitButton.classList.add("error");
    submitButton.disabled = true;

    // return false;
    // firstName.classList.add("error");
  } else {
    submitButton.classList.remove("error");
    submitButton.disabled = false;
    // return true;
  }
});
var formValidation = emailResult.addEventListener("blur", function() {
  // alert('hi');w
  if (emailResult.value.length <= 0) {
    // alert("WHY");

    submitButton.classList.add("error");
    submitButton.disabled = true;

    // return false;
    // firstName.classList.add("error");
  } else {
    submitButton.classList.remove("error");
    submitButton.disabled = false;
    // return true;
  }
});
var formValidation = questionsResult.addEventListener("blur", function() {
  // alert('hi');w
  if (questionsResult.value.length <= 0) {
    // alert("WHY");

    submitButton.classList.add("error");
    submitButton.disabled = true;

    // return false;
    // firstName.classList.add("error");
  } else {
    submitButton.classList.remove("error");
    submitButton.disabled = false;
    // return true;
  }
});

// if ((formValidation = false)) {
//   document.getElementsByClassName("formvalid").style.display = "block";
// }

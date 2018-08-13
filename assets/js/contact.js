var submitButton = document.getElementById("formSubmit");
var firstNameResult = document.getElementById("fName");
var lastNameResult = document.getElementById("lName");
var phoneNumResult = document.getElementById("phoneNumber");
var emailResult = document.getElementById("emailAddress");
var questionsResult = document.getElementById("questions");
var checkAgain = document.querySelector(".formvalid");

var required = document.querySelectorAll("label");

var formValidation = firstNameResult.addEventListener("blur", function() {
  if (firstNameResult.value.length <= 0) {
    checkAgain.style.display = "block";
    submitButton.classList.add("error");
    submitButton.disabled = true;
  } else {
    checkAgain.style.display = "none";
    submitButton.classList.remove("error");
    submitButton.disabled = false;
    return true;
  }
});
var formValidation = lastNameResult.addEventListener("blur", function() {
  if (lastNameResult.value.length <= 0) {
    checkAgain.style.display = "block";
    submitButton.classList.add("error");
    submitButton.disabled = true;
  } else {
    checkAgain.style.display = "none";
    submitButton.classList.remove("error");
    submitButton.disabled = false;
  }
});
var formValidation = phoneNumResult.addEventListener("blur", function() {
  if (phoneNumResult.value.length <= 0) {
    checkAgain.style.display = "block";
    submitButton.classList.add("error");
    submitButton.disabled = true;
  } else {
    checkAgain.style.display = "none";
    submitButton.classList.remove("error");
    submitButton.disabled = false;
  }
});
var formValidation = emailResult.addEventListener("blur", function() {
  if (emailResult.value.length <= 0) {
    checkAgain.style.display = "block";
    submitButton.classList.add("error");
    submitButton.disabled = true;
  } else {
    checkAgain.style.display = "none";
    submitButton.classList.remove("error");
    submitButton.disabled = false;
  }
});
var formValidation = questionsResult.addEventListener("blur", function() {
  if (questionsResult.value.length <= 0) {
    checkAgain.style.display = "block";
    submitButton.classList.add("error");
    submitButton.disabled = true;
  } else {
    checkAgain.style.display = "none";
    submitButton.classList.remove("error");
    submitButton.disabled = false;
  }
});

if ((formValidation = false)) {
  document.getElementsByClassName("formvalid").style.display = "block";
}

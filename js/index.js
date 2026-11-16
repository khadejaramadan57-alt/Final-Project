function contactus() {
let form = document.getElementById("contactForm");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");

let rgxName = /^[A-Z][a-zA-Z]*$/;
let rgxEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    //remove extra spaces
    firstName.value=firstName.value.trim()
    lastName.value=lastName.value.trim()
    email.value=email.value.trim()

    // First Name Validation
    if (rgxName.test(firstName.value)) {
        firstName.classList.add("is-valid");
        firstName.classList.remove("is-invalid");
    }
    else {
        firstName.classList.add("is-invalid");
        firstName.classList.remove("is-valid");
    }

    // Last Name Validation
    if (rgxName.test(lastName.value)) {
        lastName.classList.add("is-valid");
        lastName.classList.remove("is-invalid");
    }
    else {
        lastName.classList.add("is-invalid");
        lastName.classList.remove("is-valid");
    }

    // Email Validation
    if (rgxEmail.test(email.value)) {
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
    }
    else {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
    }

};
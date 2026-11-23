function contactus() {
let form = document.getElementById("contactForm");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");

let rgxName = /^[A-Za-z][a-z]*$/;
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

const root = document.documentElement;
const themeBtns = document.querySelectorAll(".theme-toggle");

// Get saved theme
const savedTheme = localStorage.getItem("theme") || "light";

// Apply saved theme when page loads
root.setAttribute("data-bs-theme", savedTheme);

function updateIcon() {
    const dark = root.getAttribute("data-bs-theme") === "dark";

    document.querySelectorAll(".theme-toggle i").forEach(i => {
        i.className = dark ? "bi bi-sun-fill" : "bi bi-moon-fill";
    });

    document.querySelectorAll(".theme-text").forEach(t => {
        t.textContent = dark ? "Light" : "Dark";
    });
}

// Update icon on page load
updateIcon();

// Theme toggle buttons
themeBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        const next = root.getAttribute("data-bs-theme") === "dark"
            ? "light"
            : "dark";

        root.setAttribute("data-bs-theme", next);

        localStorage.setItem("theme", next);

        updateIcon();
    });
});

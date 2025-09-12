const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

// Validation functions
function validateName(name) {
  if (!name.trim()) return "Name is required";
  if (name.trim().length < 2) return "Name must be at least 2 characters";
  return "";
}

function validateEmail(email) {
  if (!email.trim()) return "Email is required";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return "Invalid email format";
  return "";
}

function validatePassword(password) {
  if (!password) return "Password is required";
  if (password.length < 8) return "Must be at least 8 characters";
  if (!/[A-Z]/.test(password)) return "Must contain uppercase letter";
  if (!/[a-z]/.test(password)) return "Must contain lowercase letter";
  if (!/\d/.test(password)) return "Must contain number";
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return "Must contain special character";
  return "";
}

// Show/hide password
togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.textContent = "🙈";
  } else {
    passwordInput.type = "password";
    togglePassword.textContent = "👁";
  }
});

// Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameVal = nameInput.value.trim();
  const emailVal = emailInput.value.trim();
  const passwordVal = passwordInput.value;

  const nameErr = validateName(nameVal);
  const emailErr = validateEmail(emailVal);
  const passErr = validatePassword(passwordVal);

  nameError.textContent = nameErr;
  emailError.textContent = emailErr;
  passwordError.textContent = passErr;

  if (!nameErr && !emailErr && !passErr) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Creating Account...";

    setTimeout(() => {
      form.classList.add("hidden");
      successMessage.classList.remove("hidden");
    }, 1500);
  }
});

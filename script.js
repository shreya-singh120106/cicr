function togglePassword() {
  const password = document.getElementById("password");
  password.type = password.type === "password" ? "text" : "password";
}

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  
  const name = document.getElementById("name").value.trim();
  if (name.length < 2) {
    document.getElementById("nameError").textContent = "Name must be at least 2 characters.";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  
  const password = document.getElementById("password").value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be 8+ chars, include uppercase, lowercase, number & special char.";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  if (isValid) {
    document.getElementById("successMsg").style.display = "block";
    document.getElementById("registerForm").reset();
  }
});

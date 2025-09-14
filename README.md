# 🌟 Registration Form (HTML, CSS, JavaScript)

A simple and modern **registration form** built with **HTML, CSS, and JavaScript**.  
It comes with **form validation**, a **password toggle (show/hide)** feature, and a clean **light purple gradient theme**.

---

## 🚀 Features
- 🎨 Clean UI with **light purple gradient background**
- 🔒 Input validation for **Name, Email, and Password**
- 👁️ Password **show/hide toggle** with eye icon
- ✅ Strong **password rules** enforced
- 📱 Responsive design (works on desktop & mobile)
- 🎉 Success message after valid registration

---

## 📂 Project Structure
project/
│── index.html # Main HTML file
│── style.css # Styling (light purple gradient, form design)
│── script.js # Validation and interactivity
│── README.md # Documentation

yaml
Copy code

---

## ⚙️ Validation Rules
### 🔤 Name
- Must be at least **2 characters**

### 📧 Email
- Must follow standard format:  
example@domain.com

markdown
Copy code

### 🔑 Password
- At least **8 characters**
- Must contain **one uppercase letter (A–Z)**
- Must contain **one lowercase letter (a–z)**
- Must contain **one number (0–9)**
- Must contain **one special character**  
*(e.g. `! @ # $ % ^ & *`)*

If any rule is broken → error message shown under the field.

---

## 🛠️ How to Run
1. Clone or download the repository:
 ```bash
 git clone <your-repo-link>
 cd project
Open index.html in your browser

Done ✅

📸 Demo
Example: Invalid input
Name: A → ❌ Error: "Name must be at least 2 characters."

Email: abc.com → ❌ Error: "Enter a valid email address."

Password: abc123 → ❌ Error: "Password must be 8+ chars, include uppercase, lowercase, number & special char."

Example: Valid input
Name: John Doe

Email: john@example.com

Password: Strong@123

✅ Success message displayed:

Copy code
🎉 Registration Successful! Welcome aboard 🚀
💡 Future Enhancements
✨ Live validation while typing (real-time feedback)

🔗 Backend integration (Node.js / PHP / Firebase)

🖼️ Input field icons (user, email, lock)

📤 Connect with database for actual user registration

👨‍💻 Author
Made with ❤️ using HTML, CSS, and JavaScript

Open for contributions! 🙌

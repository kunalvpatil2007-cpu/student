const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");
const forgotPassword = document.getElementById("forgotPassword");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentId = document.getElementById("studentId").value.trim();
    const password = document.getElementById("password").value;

    // Demo login credentials
    const validStudentId = "student123";
    const validPassword = "12345";

    if (studentId === validStudentId && password === validPassword) {
        message.style.color = "green";
        message.textContent = "Login successful! Welcome, Student.";

        // Example: redirect to dashboard
        setTimeout(function () {
            window.location.href = "dashboard.html";
        }, 1000);
    } else {
        message.style.color = "red";
        message.textContent = "Invalid Student ID or Password.";
    }
});

forgotPassword.addEventListener("click", function (event) {
    event.preventDefault();

    alert("Please contact your college administrator to reset your password.");
});

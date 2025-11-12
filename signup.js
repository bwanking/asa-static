document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector("input[name='email']");
  const phoneInput = document.querySelector("input[name='phone']");

  emailInput.addEventListener("blur", () => {
    simulateCheck("email", emailInput.value, "#emailError");
  });

  phoneInput.addEventListener("blur", () => {
    simulateCheck("phone", phoneInput.value, "#phoneError");
  });

  function simulateCheck(field, value, errorSelector) {
    // Simulated duplicate check logic
    const msg = value.toLowerCase().includes("test")
      ? `${field.charAt(0).toUpperCase() + field.slice(1)} already exists.`
      : "";
    document.querySelector(errorSelector).textContent = msg;
  }
});

// Optional: handle form submission if PHP is disabled
function handleSignup(event) {
  event.preventDefault();

  // You can collect form data here
  const formData = new FormData(document.getElementById("signupForm"));
  const user = {
    fullname: formData.get("fullname"),
    username: formData.get("username"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password")
  };

  // Placeholder action
  alert(`Signup submitted for ${user.fullname}. Backend integration coming soon.`);
}

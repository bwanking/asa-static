document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  const message = document.getElementById("message");

  if (!form) {
    console.error("Form element not found!");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;

    console.log("Form submitted with:", { name, email, phone });

    try {
      // Create Firebase Auth user
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const uid = userCredential.user.uid;
      console.log("Auth user created:", uid);

      // Save user data in Firestore
      await db.collection("users").doc(uid).set({
        name,
        email,
        phone,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      console.log("User data saved to Firestore successfully");

      message.textContent = "Signup successful!";
      message.style.color = "green";
      form.reset();
    } catch (error) {
      console.error("Signup error:", error);
      message.textContent = error.message;
      message.style.color = "red";
    }
  });
});

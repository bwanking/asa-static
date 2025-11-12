document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  const message = document.getElementById("message");

  if (!form) {
    console.error("Form element not found!");
    return;
  }

  const auth = firebase.auth();
  const db = firebase.firestore();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const uid = userCredential.user.uid;

      await db.collection("users").doc(uid).set({
        name,
        email,
        phone,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });

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

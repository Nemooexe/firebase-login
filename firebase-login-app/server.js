const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

document.getElementById("signupBtn").addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(userCredential => {
      message.textContent = "✅ User Registered Successfully!";
    })
    .catch(error => {
      message.textContent = "❌ " + error.message;
    });
});

document.getElementById("loginBtn").addEventListener("click", () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(userCredential => {
      message.textContent = "✅ Login Successful!";
    })
    .catch(error => {
      message.textContent = "❌ " + error.message;
    });
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      message.textContent = "👋 Logged out successfully!";
    })
    .catch(error => {
      message.textContent = "❌ " + error.message;
    });
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4Nrve1hpUi8NbkVyYUNstupZcwZgMkU8",
  authDomain: "dermisite.firebaseapp.com",
  projectId: "dermisite",
  storageBucket: "dermisite.firebasestorage.app",
  messagingSenderId: "77962561714",
  appId: "1:77962561714:web:81e3d1dc510d44aea921ab"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const email = document.getElementById("email");
const password = document.getElementById("password");
const name = document.getElementById("fullName");
const submitBtn = document.getElementById("submitBtn");
const googleBtn = document.getElementById("googleSignIn");

submitBtn.addEventListener("click", async () => {
  if (!email.value || !password.value || !name.value) {
    alert("Please fill all fields");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    alert("🎉 Account created successfully!");
    window.location.href = "index.html";
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        alert("✅ Login successful!");
        window.location.href = "index.html";
      } catch {
        alert("❌ Wrong password for this email");
      }
    } else {
      alert(error.message);
    }
  }
});

googleBtn.addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
    alert("Google login successful!");
    window.location.href = "index.html";
  } catch {
    alert("Google Sign In failed");
  }
});

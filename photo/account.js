
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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

const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    userEmail.innerText = user.email;   // 👈 Real logged-in email
  } else {
    // If not logged in → redirect to login page
    window.location.href = "login.html";
  }
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "login.html";
});


function goToAccount() {
  window.location.href = "account.html";
}


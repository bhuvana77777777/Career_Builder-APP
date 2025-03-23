import { auth } from "./firebase-config.js";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail, 
    signOut 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// User Signup
export async function signUp(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup Successful!");
        window.location.href = "dashboard.html";
    } catch (error) {
        alert(error.message);
    }
}

// User Login
export async function login(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } catch (error) {
        alert(error.message);
    }
}

// Password Reset
export async function resetPassword(email) {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset email sent! Check your inbox.");
    } catch (error) {
        alert(error.message);
    }
}


// Logout function
function logout() {
    signOut(auth).then(() => {
        console.log("User signed out successfully.");
        window.location.href = "index.html"; // Redirect to login page
    }).catch((error) => {
        console.error("Logout failed:", error);
    });
}

// Export logout function for use in other files
export { logout };

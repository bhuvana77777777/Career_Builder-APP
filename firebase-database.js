import { db } from "./firebase-config.js";
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Save User Data after Signup
async function saveUserData(userId, fullName, email, careerInterest) {
    try {
        await setDoc(doc(db, "users", userId), {
            fullName,
            email,
            careerInterest,
            skills: [],
            createdAt: new Date()
        });
        console.log("User data saved successfully!");
    } catch (error) {
        console.error("Error saving user data: ", error);
    }
}

// Get User Data
async function getUserData(userId) {
    const userRef = doc(db, "users", userId);
    try {
        const userDoc = await getDoc(userRef);
        return userDoc.exists() ? userDoc.data() : null;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
}

// Update User Skills
async function updateUserSkills(userId, newSkills) {
    try {
        await updateDoc(doc(db, "users", userId), {
            skills: arrayUnion(...newSkills)
        });
        console.log("Skills updated successfully!");
    } catch (error) {
        console.error("Error updating skills:", error);
    }
}

// Export functions
export { saveUserData, getUserData, updateUserSkills };

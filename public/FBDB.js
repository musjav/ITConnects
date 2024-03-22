
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyg8Cz0s9UO4l5-KD8WgH_nyfsPL5jx9g",
    authDomain: "project-1-d378a.firebaseapp.com",
    databaseURL: "https://project-1-d378a-default-rtdb.firebaseio.com",
    projectId: "project-1-d378a",
    storageBucket: "project-1-d378a.appspot.com",
    messagingSenderId: "341334344581",
    appId: "1:341334344581:web:62649b259087b8ae03baec",
    measurementId: "G-G94NDNEXL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

// Function to send data to Firebase
// Attach event listener to the submit button
// document.getElementById('submit').addEventListener('click', function () {
//     const email = document.getElementById('email').value;
//     const name = document.getElementById('name').value;
//     const subject = document.getElementById('subject').value;
//     const message = document.getElementById('message').value;

//     // Example: Send data to Firebase
//     sendData(email, name, subject, message);

// });
// Function to send data to Firebase

window.sendData = function () {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
 

        
       
    // Check if any required field is empty
    const data = {
        email: email,
        name: name,
        subject: subject,
        message: message,
        timestamp: Date.now()
    };


    // Push the data to a new child node in the 'messages' path
    push(ref(db, 'messages'), data);

};


// // Function to get data from Firebase and update the UI
// function getDataAndUpdateUI() {
//     const dataContainer = document.getElementById('dataContainer');

//     // Reference to the 'messages' path
//     const messagesRef = ref(db, 'messages');

//     // Listen for changes in the data
//     onValue(messagesRef, (snapshot) => {
//         // Clear the existing data in the UI container
//         dataContainer.innerHTML = "";

//         // Iterate over each child in the 'messages' path
//         snapshot.forEach((childSnapshot) => {
//             const messageData = childSnapshot.val();
//             const messageElement = document.createElement('p');
//             messageElement.textContent = `${messageData.message} (Timestamp: ${messageData.timestamp})`;
//             dataContainer.appendChild(messageElement);
//         });
//     });
// }




// // Example: Get data from Firebase and update UI
// getDataAndUpdateUI();
// // ==================================================================
// document.addEventListener("DOMContentLoaded", function () {
//     const menuIcon = document.getElementById("menuIcon");
//     const sideMenu = document.getElementById("sideMenu");

//     // Toggle side menu when menu icon is clicked
//     menuIcon.addEventListener("click", function () {
//         sideMenu.classList.toggle("active");
//     });

//     // Close side menu when clicking outside of it
//     document.addEventListener("click", function (event) {
//         const targetElement = event.target;
//         if (!sideMenu.contains(targetElement) && !menuIcon.contains(targetElement)) {
//             sideMenu.classList.remove("active");
//         }
//     });
// });

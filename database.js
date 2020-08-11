// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDUKbgK5P8qpFnJsNmSbrwaCLjhzXlycGo",
    authDomain: "my-awesome-project-980708.firebaseapp.com",
    databaseURL: "https://my-awesome-project-980708.firebaseio.com",
    projectId: "my-awesome-project-980708",
    storageBucket: "my-awesome-project-980708.appspot.com",
    messagingSenderId: "162946482353",
    appId: "1:162946482353:web:f4ac1186ecd50d9c9ce290",
    measurementId: "G-GTH3E6TY30"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
console.log(firebase.analytics())

let myFlashcards = [ {
 
    "question": "Name this species of bird.",
 
    "image" : "images/barn-owl-2550068__340.webp",
 
    "answer": "Barn Owl"
 
    },
 
    {
 
    "question": "Name this species of bird.",
 
    "image" : "images/dove-2516641__340.webp",
 
    "answer": "Dove"
 
    },
 
    {
 
    "question": "Name this species of bird.",
 
    "image" : "images/hummingbird-2139279__340.webp",
 
    "answer": "Hummingbird"
 
    }
 
  ];

  // Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
var temp = firebase.database().ref(); 
 
// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten
// Thus, a write operation also does an update
firebase.database().set(myFlashcards);


firebase.database().set({
    myFlashcards
  }, function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log("success0")
    }
  });

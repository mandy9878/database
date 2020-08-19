
var firebaseConfig = {
    apiKey: "AIzaSyC2AsSKKWhgFLBXA4D8YPrT8eLPgCI-6ss",
    authDomain: "my-awesome-project-980321.firebaseapp.com",
    databaseURL: "https://my-awesome-project-980321.firebaseio.com",
    projectId: "my-awesome-project-980321",
    storageBucket: "my-awesome-project-980321.appspot.com",
    messagingSenderId: "144776003320",
    appId: "1:144776003320:web:9e5279353b0027e74a850d",
    measurementId: "G-MBNQM5QRYB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

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
firebase.database().ref(); 
// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten
// Thus, a write operation also does an update
firebase.database().ref().set(myFlashcards);

// As before,make the database point to the location where the data exists
 
// If the location doesn't exist it will be created but there will be nothing to retirieve
 
let fc = firebase.database().ref();
 
 
 
// A variable to store the JSON results
 
let jsonString;
 
 
 
// Tell Firebase to retrieve your data
 
fc.on("value", function(retrieve) {
 
   
 
    //Get the raw data back from the database
    console.log(retrieve.val() )
    let queryData = retrieve.val();
 
     
 
    // Turn the data into a JSON String
 
    jsonString = JSON.stringify(queryData);
 
});
 
 
 
// Print the data out as a JSON string or otherwise manipulate it
 
console.log (' JSON string:' + jsonString )

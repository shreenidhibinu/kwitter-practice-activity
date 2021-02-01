
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyB7vw9jeNCEkhMGlYGFPVQbzrjUev1SrEY",
    authDomain: "kwitter-c5700.firebaseapp.com",
    databaseURL: "https://kwitter-c5700-default-rtdb.firebaseio.com",
    projectId: "kwitter-c5700",
    storageBucket: "kwitter-c5700.appspot.com",
    messagingSenderId: "861444040922",
    appId: "1:861444040922:web:ef03eda039947753aa1de3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function adduser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });

  }
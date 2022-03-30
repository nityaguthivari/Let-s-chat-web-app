// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDCX8vAvRevZFMjtIDV9hFSMVorTyNvv2s",
    authDomain: "kwitter-5bfb0.firebaseapp.com",
    databaseURL: "https://kwitter-5bfb0-default-rtdb.firebaseio.com",
    projectId: "kwitter-5bfb0",
    storageBucket: "kwitter-5bfb0.appspot.com",
    messagingSenderId: "605811386115",
    appId: "1:605811386115:web:b445cda6bc6f2cb2d26b36"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   function addroom(){
         roomName=document.getElementById("roomName").value;
         firebase.database().ref("/").child(roomName).update({
               purpose:"adding roomName"

         });
         localStorage.setItem("roomName",roomName);
         window.location="kwitter_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData(); 


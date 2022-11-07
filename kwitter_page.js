//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDiIcKbK48Yjs1gO9ZhJBt88yS_DxX36o4",
      authDomain: "kwitter-bc9ac.firebaseapp.com",
      databaseURL: "https://kwitter-bc9ac-default-rtdb.firebaseio.com",
      projectId: "kwitter-bc9ac",
      storageBucket: "kwitter-bc9ac.appspot.com",
      messagingSenderId: "870357935170",
      appId: "1:870357935170:web:9803e7eb940083082639db",
      measurementId: "G-YH37DBP8S6"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function sendMessage(){
      message = document.getElementById("tweet").value;

      firebase.database().ref(room_name).push({
            name : user_name,
            message : message,
            like : 0
      });

      document.getElementById("tweet").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

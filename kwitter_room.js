
//ADD YOUR FIREBASE LINKS HERE
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
     
welcome = localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML = "welcome " + welcome;

function addRoom(){
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding user"
      });
      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room names " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='nextPage(this.id)'># "+Room_names+"</div><hr> ";
       document.getElementById("output").innerHTML += row;
      //Start code


      //End code
      });});}
getData();

function nextPage(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      window.location = "index.html";
}



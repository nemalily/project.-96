//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDLwEelc7lKROO30kjAOHcs1fUhYqsE7ck",
      authDomain: "twitterkwitter-35c18.firebaseapp.com",
      databaseURL: "https://twitterkwitter-35c18-default-rtdb.firebaseio.com",
      projectId: "twitterkwitter-35c18",
      storageBucket: "twitterkwitter-35c18.appspot.com",
      messagingSenderId: "632247280193",
      appId: "1:632247280193:web:7cd9a23e62f75ff6b49cc0"
};

user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;

             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}
//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDLwEelc7lKROO30kjAOHcs1fUhYqsE7ck",
      authDomain: "twitterkwitter-35c18.firebaseapp.com",
      databaseURL: "https://twitterkwitter-35c18-default-rtdb.firebaseio.com",
      projectId: "twitterkwitter-35c18",
      storageBucket: "twitterkwitter-35c18.appspot.com",
      messagingSenderId: "632247280193",
      appId: "1:632247280193:web:7cd9a23e62f75ff6b49cc0"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['name'];
                        message = message_data['message'];
                        like = message_data['message'];
                        like = message_data['Like'];
                        name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                        message_tag = "<h4 class='messsage_h4'>" + message + "</h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class=glyphicon glyphicon-thumbs-up'>Like; " + like + "</span></button><hr>";

                        row = name_with_tag + message_with_tag + Like_button + span_with_tag;
                        document.getElementById("output").innnerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0

      });
      document.getElementById("msg").value = "";
}

function updateLike(message_id) {
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      })
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window, location.replace("kwitter.html");
}
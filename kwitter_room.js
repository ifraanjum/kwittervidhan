const firebaseConfig = {
    apiKey: "AIzaSyDLE0fOFW2pEvMx0izs_FZaZsg0xj8p_Gw",
    authDomain: "kwittervidhan-6c224.firebaseapp.com",
    databaseURL: "https://kwittervidhan-6c224-default-rtdb.firebaseio.com",
    projectId: "kwittervidhan-6c224",
    storageBucket: "kwittervidhan-6c224.appspot.com",
    messagingSenderId: "768296254309",
    appId: "1:768296254309:web:cc4d6ad3ebec448b1d3f8c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    function adduser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("key",user_name)

    window.location = "kwitter_room.html";
}

  
 
  
  user_name_fromlocalstorage = localStorage.getItem("key");
  console.log("user_name_fromlocalstorage-"+ user_name_fromlocalstorage)
  
  document.getElementById("user_name").innerHTML = user_name_fromlocalstorage 
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("key");
  localStorage.removeItem("room_name");
  window.location = "Main.html";
  }
  

//firebase configuration
var firebaseConfig = {  
    apiKey: "AIzaSyCv6alcYb3ozkp69mkKyq0aqvm5dkDCXVA",
    authDomain: "reserve-it-62f58.firebaseapp.com",
    databaseURL: "https://reserve-it-62f58.firebaseio.com",
    projectId: "reserve-it-62f58",
    storageBucket: "reserve-it-62f58.appspot.com",
    messagingSenderId: "336823090637",
    appId: "1:336823090637:web:8a1d791337d5c7fb555884",
    measurementId: "G-MQ65J7VSYB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth.Auth.Persistence.LOCAL; // keep the user logged in when  the browser is closed

$("#btn-login").click(function(){

    let email = $("#email").val(); // store the value entered in the email input field inside a var
    let password = $("#password").val();// store the value entered in the password input field inside a var
   
   firebase.auth().signInWithEmailAndPassword(email,password);  // use the entered email and password to sign in with firebase

    result.catch(function(error){ //display error code and message in case of login error
        let errorCode = error.code;
        let errorMessage = error.message;
        alert("something went wrong");
        console.log(errorCode);
        console.log(errorMessage);
        
    });
   

});
    

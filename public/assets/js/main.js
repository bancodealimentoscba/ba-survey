(function (_firebase) {
  var config;
  
  config = {
    apiKey: "AIzaSyCgv9v7BUbJJYHhpz5dqweEwAqzzJDkYx0",
    authDomain: "bancodealimentoscba-1e703.firebaseapp.com",
    databaseURL: "https://bancodealimentoscba-1e703.firebaseio.com",
    storageBucket: "bancodealimentoscba-1e703.appspot.com",
    messagingSenderId: "850994234398"
  };

  _firebase.initializeApp(config);
})(window.firebase);

$( document ).ready(function() {
    var abc = document.body.innerHTML;
    var a = String(abc).replace(/\u200B/g,'');
    document.body.innerHTML = a;
});
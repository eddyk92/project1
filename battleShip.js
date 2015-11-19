var btn = document.getElementById("btn");

btn.addEventListener("click", function() { 
  var val = document.getElementsByTagName('input')[name="username"].value

  localStorage.setItem('username', val);
});

// accessing

var btn = document.getElementById("btn");

btn.addEventListener("click", function() { 
  var val = document.getElementsByTagName('input')[name="email"].value

  localStorage.setItem('email', val);
});

var btn = document.getElementById("btn");

btn.addEventListener("click", function() { 
  var val = document.getElementsByTagName('input')[name="password"].value

  localStorage.setItem('password', val);
});
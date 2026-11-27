document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var service = document.getElementById("service").value;

  if (name == "" || email == "" || phone == "" || service == "") {
    document.getElementById("error").innerHTML = "Please fill all fields.";
    return;
  }

  document.getElementById("myForm").style.display = "none";
  document.getElementById("thanks").style.display = "block";
  document.getElementById("thanksTitle").innerHTML = "Thank you, " + name + "!";
});

// Show the current date on the home page
var dateBanner = document.getElementById("current-date");
var today = new Date();
dateBanner.textContent = today.toDateString();

// Enlarge the main image when the mouse is over it
var img = document.getElementById("zoom-image");
img.onmouseover = function () { this.style.transform = "scale(1.12)"; };
img.onmouseout = function () { this.style.transform = "scale(1)"; };

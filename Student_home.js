

// Home JS
let count = 100;
let sum = 75;
let percent = (sum / count) * 100;
let number = document.getElementById("lec1-score");
let counter = 0;
setInterval(() => {
  if (counter == percent) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = counter + "%";
  }
}, 20);

// Get the circle element
// var circle = document.querySelector("circle");

// Define the new value for stroke-dashoffset
var num = "0." + percent;
if (percent == 100) {
  var newDashOffset = 0;
} else if (percent < 10) {
  var num = "0.0" + percent;
  var newDashOffset = 252 - 252 * num;
} else {
  var newDashOffset = 252 - 252 * num;
}

var newKeyframes = `@keyframes anim {
    100% {
      stroke-dashoffset: ${newDashOffset};
    }
  }`;

var style = document.createElement("style");
style.textContent = newKeyframes;
document.head.appendChild(style);

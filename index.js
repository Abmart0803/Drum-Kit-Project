// document.querySelector("button").addEventListener("click", clickHandler);

// function clickHandler() {
//   alert("I got clicked");
// }

//the above code can be re written as below code and will still do same work.
// document.querySelector("button").addEventListener("click", function() {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[1].addEventListener("click", function() {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[2].addEventListener("click", function() {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[3].addEventListener("click", function() {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[4].addEventListener("click", function() {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[5].addEventListener("click", function() {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[6].addEventListener("click", function() {
//   alert("I got clicked");
// });

//All the aove codes that take 25 lines of code can be shorten with the below five lines of 
// and perform same function.

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons; i ++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//     alert("I got clicked");
//   });

// }


//this section detect button press.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i ++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
   
  });

}

//This section detct the Keybard press.
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound (key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();      
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();      
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();      
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();      
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();      
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();      
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();      
      break;
   
    default: console.log(key);
      
   }

}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}


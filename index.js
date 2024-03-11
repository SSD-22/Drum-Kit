// for all the button event.
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
  // you can also use while loop.
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makesound(this.innerHTML);
    
    buttonAmimation(this.innerHTML);
  });
}
/// here is creation of anonymous function without name.
//var audio = new Audio('sounds/tom-1.mp3');
//audio.play();

document.addEventListener("keypress",function(event){
  makesound(event.key);

  buttonAmimation(event.key);
})

function makesound(key){

  switch(key){
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
    break;
    
    case 'a' :
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
    break;
    
    case 's' :
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
    break;

    case 'd' :
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
    break;

    case 'j' :
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
    break;

    case 'k' :
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
    break;

    case 'l' :
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
    break;
  }
}


// Function for Animation to the Buttons
function buttonAmimation(key){
  var abut = document.querySelector("."+key);
 
  abut.classList.add("pressed");
  setTimeout(function(){
  abut.classList.remove("pressed");},100);
}
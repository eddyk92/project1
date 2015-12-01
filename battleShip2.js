function oceanSound (e){
      var audioElement = e.ocean;
        currentDiv.audioElement('src','http://www.mediacollege.com/downloads/sound-effects/nature/seaside/seaside-01.wav');
      }
// make game board
function makeGrid(color) {
    var grid = document.createElement("div");
    // grid.style.width = "200px";
    // grid.style.paddingBottom = "200px";
    grid.style.width = "40px";
    grid.style.paddingBottom = "40px";
    // grid.style.paddingBottom = "14.28%";
    grid.style.float = "left";
    grid.style.background = color;
    grid.style.borderStyle = 'solid';
    grid.style.borderColor = '#66c1ff';
    grid.addEventListener("click", function(e) {
      var currentDiv = e.target;

      if (currentDiv.getAttribute("data-ship") === "true") {
        currentDiv.style.backgroundColor = "green";
      }
  function bombSound (e){
      var audioElement = e.shipHit;
      if (currentDiv.getAttribute("data-ship") === "true") {
        currentDiv.audioElement('src','http://download.gameszone.ro/cs/sound/BigExplosion.wav');
      }

    }});


    return grid;
}

alert ("Salutations Friend.\nWelcome to this one of a kind, highly simplified rendition of Battleship!");
alert ("Soon you will see a super awesome grid below.\nThat's the ocean, and in that ocean there are four super scary Battleships... doing battleship stuff.\n You don't like that, Your job is to blow their shit up!!");
alert ("Find where they're at and drop a Fat Man on em' by clicking on each tile.");
alert ("But HURRY!\nYou're being timed.\nDon't Let them get away!");



// make 
function createGrid(n) {
  var grid = null;
  var container = document.createElement("div");
  container.id = "container";
  container.style.padding = "0";

  container.setAttribute('class', 'group');
  
  n = Math.sqrt(n);

  for (var i = 1; i < n; i++) {
    for (var j = 1; j < n; j++) {
      var coords = (i + "") + (j + "");
     
      color = "#99d6ff";

      grid = makeGrid(color);
      grid.setAttribute('id', coords);

      container.appendChild(grid);
    }
  }


  document.body.appendChild(container);
}

  // ship.setAttribute('data-ship',true);
  // document.randomShips.style.background = 'green';
// }
// document.randomShips(data-ship) = true;
// how would i change the background color of this div

// use randomShps return--e.g., "88"--to find the div with an id of "88"
// give that div an attribute with a key "data-ship" and value true




// createShips(4);
 createGrid(89);

 function randomShip(n) {

   var xCoord = Math.floor(Math.random() * 9) + 1;
   var yCoord = Math.floor(Math.random() * 9) + 1;

   return xCoord.toString() + yCoord.toString();
 
  } 
 var ship = randomShip();
 document.getElementById(ship).setAttribute("data-ship",true);
 console.log(ship);

 function randomShip(n) {

   var xCoord = Math.floor(Math.random() * 9) + 1;
   var yCoord = Math.floor(Math.random() * 9) + 1;

   return xCoord.toString() + yCoord.toString();
 
  } 
 var ship = randomShip();
 document.getElementById(ship).setAttribute("data-ship",true);
 console.log(ship);

  function randomShip(n) {

   var xCoord = Math.floor(Math.random() * 9) + 1;
   var yCoord = Math.floor(Math.random() * 9) + 1;

   return xCoord.toString() + yCoord.toString();
 
  } 
 var ship = randomShip();
 document.getElementById(ship).setAttribute("data-ship",true);
 console.log(ship);

  function randomShip(n) {

   var xCoord = Math.floor(Math.random() * 9) + 1;
   var yCoord = Math.floor(Math.random() * 9) + 1;

   return xCoord.toString() + yCoord.toString();
 
  } 
 var ship = randomShip();
 document.getElementById(ship).setAttribute("data-ship",true);
 console.log(ship);




//step 1: create function called makeShip = makes 1 ship 68-77
//step 2: create function called createShips interates for loop = 4 ship
//stretch goal replace background color green with image sunken ship


var tiles = document.getElementsByClassName('tile');

    for(var i=0; i < tiles.length; i++){
    tiles[i].addEventListener('click',changeColor);
    }

function changeColor(event){
    this.style.backgroundColor = "red";
}


var name = localStorage.getItem('username');
// var val = document.getElementsByTagName('input')[name="password"].value 

document.getElementById("username").textContent = name
console.log(name);


document.userName

function countDown(){
  this.start_time ="30:00";
  this.target_id ="#timer";
  this.name = "timer";
}

countDown.prototype.init = function(){
  this.reset();
  setInterval(this.name + '.tick()', 1000);
}

countDown.prototype.reset = function(){
  time = this.start_time.split(":");
  this.minutes = parseInt(time[0]);
  this.seconds = parseInt(time[1]);
  this.update_target();
}

countDown.prototype.tick = function(){
  if(this.seconds > 0 && this.minutes > 0){
    if(this.seconds ==0){
      this.minutes = this.minutes -1;
      this.seconds = 59
    } else {
      this.seconds = this.seconds -1;
    }
  }
  this.update_target()
}
countDown.prototype.update_target = function(){
  seconds = this.seconds;
  if(seconds < 10) seconds = "0" + seconds;
  $(this.target_id).val(this.minutes + ":" + seconds)
}


//  var btn = document.getElementById("btn");

// btn.addEventListener("click", function() { 
//   var val = document.getElementsByTagName('input')[name="password"].value

//   localStorage.setItem('password', val);
// });



// window.onload = function() {
//   ...

//   var name = localStorage.getItem('form-control');

//   if (name != "undefined" || name != "null") {
//     document.getElementById('welcomeMessage').innerHTML = "Hello " + name + "!";
//   } else
//     document.getElementById('welcomeMessage').innerHTML = "Hello!";
//   }
// }


// function createScoreBox(n){
//   var box = null;
//   var container = document.createElement('div');
//   container.id = 'scorebox'
//   container.setAttribute('class', 'score');

//   var score =o;

//   function drawScore (n) {
//          ctx.font = "16px Arial";
//     ctx.fillStyle = "#0095DD";
//     ctx.fillText("Score: "+score);
//    } 

// }




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
    });


    return grid;
}

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




// createGrid(14);
 createGrid(89);

 function randomShips() {
   var xCoord = Math.floor(Math.random() * 9) + 1;
   var yCoord = Math.floor(Math.random() * 9) + 1;

   return xCoord.toString() + yCoord.toString();
 }
   
   var ship = randomShips();
   document.getElementById(ship).setAttribute("data-ship",true);
   console.log(ship);


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




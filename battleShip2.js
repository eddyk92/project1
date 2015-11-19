function makeGrid(color) {
    var grid = document.createElement("div");
    grid.style.width = "70px";
    grid.style.paddingBottom = "70px";
    // grid.style.paddingBottom = "14.28%";
    grid.style.float = "left";
    grid.style.background = color;
    grid.style.borderStyle = 'solid';
    grid.style.borderColor = 'silver';
    grid.addEventListener("click", function() {
      console.log("color");
    });

    return grid;
}


function createGrid(n) {
  var grid = null;
  var container = document.createElement("div");
  container.id = "container";
  container.style.padding = "0";

  container.setAttribute('class', 'group');

  for (var i = 0; i < n; i++) {
     color = "white";

     grid = makeGrid(color);
     grid.setAttribute('class', 'tile')

    container.appendChild(grid);
  }
 document.body.appendChild(container);
}


createGrid(50);



// 

var tiles = document.getElementsByClassName('tile');

for(var i=0; i < tiles.length; i++){
  tiles[i].addEventListener('click',changeColor);
}
function changeColor(event){
  this.style.backgroundColor = "red";
}


var name = localStorage.getItem('username');
var val = document.getElementsByTagName('input')[name="password"].value 

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




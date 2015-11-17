function makeGrid(color) {
    var grid = document.createElement("div");
    grid.style.width = "12.%";
    grid.style.paddingBottom = "12.%";
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

  for (var i = 0; i < n; i++) {
     color = "white";

     grid = makeGrid(color);
     grid.setAttribute('class', 'tile')

    container.appendChild(grid);
   
  }
 document.body.appendChild(container);
}


createGrid(42);

// 

var tiles = document.getElementsByClassName('tile');

for(var i=0; i<tiles.length; i++){
  tiles[i].addEventListener('click',changeColor);
}
// function changeColor(event){
//   event.target.style.backgroundColor: red;
// }



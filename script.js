//Use DOM to select our div that acts as the container
const container = document.querySelector("#container");

//Function that uses a loop to create 256 individual square divs and append them to the container.
function createGrid(size) {
  // Initalize variable that multiplies the number of spaces by itself so that we get an even grid
  const totalSquares = size * size;
  
  for (let i = 0; i < totalSquares; i++) {

    //document.createElement is a DOM operation that allows us to create HTML elements
    const square = document.createElement("div");

    //classList.add is a DOM operation that allows us to add CSS to a HTML element
    square.classList.add("grid-square");

    //This is an event lister that give the mouse a hover effect changing the color of the squares
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });


    //.appendChild is a DOM operation that allows us adds a specified node as the last child of a parent node. In this case the div with 
    // the container id is the parent node and the div created by our square vairable is the last child
    container.appendChild(square);
  }
}

createGrid(16);
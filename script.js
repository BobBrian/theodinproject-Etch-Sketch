// Use DOM to select HTML eleemnts
// Keep the grid container and reset button available so they can be
// updated in response to the user's input.
const container = document.querySelector("#grid-container");
const resetBtn = document.querySelector("#reset-btn");


function getGridSize(){
    let userInput = parseInt(prompt("Please enter the number of squares per side (2 - 100):"), 10);

    // Limiting the grid prevents invalid input and keeps the number of
    // elements created at a reasonable level for the browser.
    // Boundry 1 - That our Input is an Integer
    // Boundry 2 - That it is an Integer between 2 and 100
    if (isNaN(userInput) || userInput < 2 || userInput > 100) {
        alert("Invalid input! Please enter a whole number between 2 and 100.");
        return null; // Return null to signal validation failed
    }

    return userInput; 
}

function createGrid(size) {

  // Remove the previous grid so that resetting creates a fresh grid
  // instead of adding new squares to the existing one.
  container.innerHTML = ''; 

   
   const totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {

    //document.createElement is a DOM operation that allows us to create HTML elements
    const square = document.createElement("div");

    //classList.add is a DOM operation that allows us to add CSS to a HTML element
    square.classList.add("grid-square");
    square.style.width = `${100 / size}%`;
    square.style.height = `${100 / size}%`;

    //This is an event lister that give the mouse a hover effect changing the color of the squares
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });


    //.appendChild is a DOM operation that allows us adds a specified node as the last child of a parent node. In this case the div with 
    // the container id is the parent node and the div created by our square vairable is the last child
    container.appendChild(square);
  }
}

// The return valye of getGridSize() is stored in the variable verifiedSize
const verifiedSize = getGridSize();

// Only create the grid if the user provided a valid number (did not return null)
if (verifiedSize !== null) {
    createGrid(verifiedSize);
}
// Reuse the same grid creation process so the reset button can generate
// a new grid without duplicating the grid-generation logic.
resetBtn.addEventListener("click", () => {
    const verifiedSize = getGridSize();

    if (verifiedSize !== null) {
        createGrid(verifiedSize);
    }
});
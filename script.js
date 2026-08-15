//Use DOM to select our div that acts as the container
const container = document.querySelector("#grid-container");
const resetBtn = document.querySelector("#reset-btn");

//Function that uses a loop to create a grid by multiplying a number by itself.
//When started the program assumes that a new grid is going to be created by default so the user is greated with a prompt window
//Asking them to enter a number
function getGridSize(){
    let userInput = parseInt(prompt("Please enter the number of squares per side (2 - 100):"), 10);

    // Validate the input boundaries
    // Boundry 1 - That our Input is an Integer
    // Boundry 2 - That it is an Integer between 2 and 100
    if (isNaN(userInput) || userInput < 2 || userInput > 100) {
        alert("Invalid input! Please enter a whole number between 2 and 100.");
        return null; // Return null to signal validation failed
    }

    return userInput; // Return the valid number. Remeber this becuase returning values is going to be important

}

function createGrid(size) {

  // Clear any existing grid squares before making a new one
  container.innerHTML = ''; 

   // Multiply the number of spaces by itself so that we get a perfect grid area
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

// --- EXECUTION FLOW ---
const verifiedSize = getGridSize();

// Only create the grid if the user provided a valid number (did not return null)
if (verifiedSize !== null) {
    createGrid(verifiedSize);
}

resetBtn.addEventListener("click", () => {
    const verifiedSize = getGridSize();

    if (verifiedSize !== null) {
        createGrid(verifiedSize);
    }
});
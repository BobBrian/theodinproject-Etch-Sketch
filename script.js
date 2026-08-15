//Use DOM to select our div that acts as the container
const container = document.querySelector("#grid-container");

//Function that uses a loop to create 256 individual square divs and append them to the container.
function createGrid(size) {
  // Initalize variable that multiplies the number of spaces by itself so that we get an even grid
  const totalSquares = size * size;

    function totalSquare() {
        let totalSquares = parseInt(prompt("Please enter the number of squares for your grid (2 - 100):"), 10);

        // 1. Check if the value is not a number (NaN)
        // 2. Check if the value is less than 2
        // 3. Check if the value is greater than 100
        if (isNaN(totalSquares) || totalSquares < 2 || totalSquares > 100) {
            alert("Invalid input! Please enter a whole number between 2 and 100.");
            return null; // Returns null to signal the function failed to get a valid number
        }

        return totalSquares; // Returns the valid integer
    }

  
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

createGrid();
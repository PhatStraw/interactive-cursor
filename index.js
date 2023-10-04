// Function to set up the canvas dimensions
function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Call the setupCanvas function to initialize the canvas dimensions
setupCanvas();

// Add an event listener for the window resize event to update the canvas dimensions
window.addEventListener("resize", setupCanvas);

// Define an object to store the pointer position
const pointer = {
    x: .5 * window.innerWidth,
    y: .5 * window.innerHeight,
}

// Add an event listener for the click event to update the mouse position
window.addEventListener("click", e => {
    updateMousePosition(e.clientX, e.clientY);
});

// Add an event listener for the mousemove event to update the mouse position
window.addEventListener("mousemove", e => {
    updateMousePosition(e.clientX, e.clientY);
});

// Add an event listener for the touchmove event to update the touch position
window.addEventListener("touchmove", e => {
    updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
});

// Function to update the mouse position
function updateMousePosition(eX, eY) {
    pointer.x = eX;
    pointer.y = eY;
}
// prepare grid container
const DEFAULT_GRID_SIZE = 16;
const CONTAINER_SIZE = 500;
const container = document.querySelector('.gridContainer');
container.setAttribute('style', 
    'width: ' + CONTAINER_SIZE + 'px; ' + 
    'height: ' + CONTAINER_SIZE + 'px;');
const OPACITY_INCREASE = 0.2;

// create a grid to play a game
function createGrid(size) {
    // delete old grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // calculate + draw new grid
    const gridSize = size;
    const gridElementSize = CONTAINER_SIZE / gridSize;
    for (i = 0; i < gridSize*gridSize; i++) {
        const gridElement = document.createElement('div');
        gridElement.setAttribute('id', i);
        gridElement.setAttribute('class', 'gridElement');
        // calculate grid elment width + height
        gridElement.setAttribute('style', 
            'width: ' + gridElementSize + 'px; ' + 
            'height: ' + gridElementSize + 'px;');
        container.appendChild(gridElement);
    }

    // add event listeners to grid elements for hover darken effect
    const gridElements = document.querySelectorAll('.gridElement');

    gridElements.forEach((element) => {
        // change background on hover
        element.addEventListener('mouseenter', (event) => {
            // set new styles
            event.target.setAttribute('style', 
                'width: ' + gridElementSize + 'px; ' + 
                'height: ' + gridElementSize + 'px; ' +
                'background-color: ' + updateColor(event.target));
        })
    });
}

// event listener for reset grid
const btnReset = document.querySelector('.btnReset');
btnReset.addEventListener('click', () => {
    const userInput = +prompt('Please enter desired size of grid')
    if (userInput <= 100 && userInput >= 1) {
        createGrid(userInput);
    } else {
        createGrid(DEFAULT_GRID_SIZE);
        alert ('Creating a grid with default size');
    }
});

// helper functions

function updateColor(element) {
    // if element has no background color yet, get a random one
    if (!element.style.backgroundColor) {
        return getRandomColor();
    } else if (element.style.backgroundColor) {
        // if element has a background color, increase the opacity
        const currentColor = element.style.backgroundColor;
        let currentOpacityValue = currentColor.match(/[\d\.]+\)$/g).toString().replace(')', '');
        let updatedColor = currentColor.replace(/[\d\.]+\)$/g, +currentOpacityValue + OPACITY_INCREASE);
        return updatedColor;
    }
}

function getRandomColor() {
    const red = getRandomInt(255);
    const green = getRandomInt(255);
    const blue = getRandomInt(255);
    const opacity = OPACITY_INCREASE;
    let calculatedColor = 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + opacity + ')';
    return calculatedColor;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// create initial grid to start game
createGrid(DEFAULT_GRID_SIZE);
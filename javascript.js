//console.log('Javascript loaded');

const DEFAULT_GRID_SIZE = 16;

// prepare grid container
const CONTAINER_SIZE = 500;
const container = document.querySelector('.gridContainer');
container.setAttribute('style', 
    'width: ' + CONTAINER_SIZE + 'px; ' + 
    'height: ' + CONTAINER_SIZE + 'px;');

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
        // console.log(gridElement);
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


// @todo fix this
function updateColor(element) {
    // if element has no background color yet, get a random one
    if (!element.style.backgroundColor) {
        console.log('returning a random color')
        return getRandomColor();
    } else if (element.style.backgroundColor) {
        console.log('current color: ' + element.style.backgroundColor);
        // if element has a background color, increase the opacity
        console.log('increasing opacity');
        const currentColor = element.style.backgroundColor;
        let opacityValue = currentColor.match(/[\d\.]+\)$/g).toString().replace(')', '');

        console.log('opacity value: ' + opacityValue);
        let updatedColor = currentColor.replace(/[\d\.]+\)$/g, +opacityValue + 0.1);
        console.log('updatedColor: '+ updatedColor);
        return updatedColor;
    }

}

function getRandomColor() {
    const red = getRandomInt(255);
    const green = getRandomInt(255);
    const blue = getRandomInt(255);
    const opacity = 0.1;
    let calculatedColor = 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + opacity + ')';
    return calculatedColor;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// create initial grid to start game
createGrid(DEFAULT_GRID_SIZE);
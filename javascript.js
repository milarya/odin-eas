//console.log('Javascript loaded');

const DEFAULTGRIDSIZE = 16;

// prepare grid container
const CONTAINERSIZE = 500;
const container = document.querySelector('.gridContainer');
container.setAttribute('style', 
    'width: ' + CONTAINERSIZE + 'px; ' + 
    'height: ' + CONTAINERSIZE + 'px;');

// create a grid to play a game
function createGrid(size) {
    // delete old grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // calculate + draw new grid
    const gridSize = size;
    const gridElementSize = CONTAINERSIZE / gridSize;
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
        element.addEventListener('mouseenter', (event) => {
            // console.log(event.target);
            event.target.setAttribute('class', 'darkened gridElement');
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
        createGrid(DEFAULTGRIDSIZE);
        alert ('Creating a grid with default size');
    }
});

// create initial grid to start game
createGrid(DEFAULTGRIDSIZE);
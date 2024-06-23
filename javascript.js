console.log('Javascript loaded');

const container = document.querySelector('.gridContainer');

// create a grid to play a game
function createGrid(size) {
    // delete old grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // calculate + draw new grid
    const gridSize = size
    for (i = 0; i < gridSize*gridSize; i++) {
        const gridElement = document.createElement('div');
        gridElement.setAttribute('id', i);
        gridElement.setAttribute('class', 'gridElement');
        console.log(gridElement);
        container.appendChild(gridElement);
    }

    // add event listeners to grid elements for hover darken effect
    const gridElements = document.querySelectorAll('.gridElement');

    gridElements.forEach((element) => {
        element.addEventListener('mouseenter', (event) => {
            console.log(event.target);
            event.target.setAttribute('class', 'darkened gridElement');
        })
    });
}

// event listener for reset grid
const btnReset = document.querySelector('.btnReset');
btnReset.addEventListener('click', () => {
    createGrid(+prompt('Please enter desired size of grid'));
});

// create initial grid to start game
createGrid(16);
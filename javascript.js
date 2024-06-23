console.log('Javascript loaded');

const GRIDSIZE = 16;


const container = document.querySelector('.gridContainer');

// create grid elements
for (i = 0; i < GRIDSIZE*GRIDSIZE; i++) {
    const gridElement = document.createElement('div');
    gridElement.setAttribute('id', i);
    gridElement.setAttribute('class', 'gridElement');
    console.log(gridElement);
    container.appendChild(gridElement);
}

// event listeners for hover darken effect
const gridElements = document.querySelectorAll('.gridElement');

gridElements.forEach((element) => {
    element.addEventListener('mouseenter', (event) => {
        console.log(event.target);
        event.target.setAttribute('class', 'darkened gridElement');
    })
});
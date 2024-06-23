console.log('Javascript loaded');

const GRIDSIZE = 16;


const container = document.querySelector('.gridContainer');

// create grid elements
// rows
for (i = 0; i < GRIDSIZE; i++) {
    const gridRow = document.createElement('div');
    gridRow.setAttribute('id', i);
    gridRow.setAttribute('class', 'gridRow');
    // columns
    for (j = 0; j < GRIDSIZE; j++) {
        const gridElement = document.createElement('div');
        gridElement.setAttribute('id', (i*GRIDSIZE) + j);
        gridElement.setAttribute('class', 'gridElement');
        console.log(gridElement);
        gridRow.appendChild(gridElement);
    }
    container.appendChild(gridRow);

}
const body = document.querySelector('body');
const container = document.querySelector('.container');
const rowDiv = document.createElement('div');
container.appendChild(rowDiv);
const resetButton = document.createElement('button');
resetButton.textContent = "Reset Grid";

function promptUser(){
    let userInput = prompt("How big would you like the grid to be? (Please choose a number less than 100)");
    if(userInput > 100 || typeof(userInput) != 'number'){
        alert("Please choose a number less than 100");
        return promptUser();
    }
    else{
        return userInput;
    }
}

resetButton.addEventListener('click', () => {
    const allRows = document.querySelectorAll('.row');
    allRows.forEach((row) => {
        container.removeChild(row);
    });
    createGrid(promptUser());
});

function createGrid(size = 50){
    for(let i = 0; i<size; i++){
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        container.appendChild(rowDiv);

        for(let j = 0; j < size; j++){
            const rowGrid = document.createElement('div');
            rowGrid.classList.add('rowGrid');
            rowDiv.appendChild(rowGrid);
            }
        }
    const gridBlock = document.querySelectorAll('.rowGrid');
    gridBlock.forEach((block) => {
    block.addEventListener('mouseover',() =>{
        block.style.backgroundColor = "black";
        });
    });   
    body.appendChild(resetButton);
}

createGrid();

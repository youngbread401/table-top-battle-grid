const gridContainer = document.getElementById('grid');
const columnLabels = document.getElementById('column-labels');

// Create token image (replace with your image path)
const tokenImage = new Image();
tokenImage.src = './assets/tokens/warrior_man_19.png'; // Replace with your token image path

// Create column labels (letters)
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
for (let i = 0; i < letters.length; i++) {
    const label = document.createElement('div');
    label.textContent = letters[i];
    columnLabels.appendChild(label);
}

// Create grid cells
for (let i = 0; i < 10; i++) { 
    for (let j = 0; j < 10; j++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.addEventListener('click', () => {
            if (cell.hasChildNodes()) { 
                // Remove token if it exists
                cell.removeChild(cell.firstChild);
            } else {
                // Add token image
                const token = document.createElement('img');
                token.src = tokenImage.src; 
                token.style.width = '30px'; // Adjust size as needed
                token.style.height = '30px'; // Adjust size as needed
                cell.appendChild(token);
            }
        });
        gridContainer.appendChild(cell);
    }
}
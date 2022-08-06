const container = document.querySelector('.container')

const createGrid = (amountOfGrids) => {
    for (let i = 0; i< amountOfGrids; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < amountOfGrids; j++) {
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')

            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black'
            })
            row.appendChild(gridBox)
        }
        container.appendChild(row)
    }
}
let sizeOfGrid = 20
createGrid(sizeOfGrid)
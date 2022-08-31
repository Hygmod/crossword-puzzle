import React from 'react'

export default function Grid() {
    let word = 'word'

    let startingPosition = [5, 5]

    for (let i = 1; i <= gridSize; i++) {
        for (let j = 1; j <= gridSize; j++) {
            const id = 'row' + i + '_' + 'col' + j
            grid.push(<div className="Tile" id={id}>

            </div>)
        }
    }

    return <div id="Tile"></div>
}
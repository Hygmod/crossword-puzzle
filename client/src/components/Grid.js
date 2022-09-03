import React from 'react'
import Tile from './Tile'

let gridSize = 20

export default function Grid() {
    let grid = []
    let words = [
        {
            word: 'bark',
            positions: [[1, 3], [1, 4], [1, 5], [1, 6]]
        },
        {
            word: 'bite',
            positions: [[3, 3], [4, 3], [5, 3], [6, 4]]
        }
    ]
    const mapPositions = words.map(e => e.positions)
    const mapPositionsRows = mapPositions.map(e => e[0])
    const mapPositionsColumns = mapPositions.map(e => e[1])
    // console.log(mapPositions)
    console.log(mapPositionsRows)

    for (let i = 1; i <= gridSize; i++) {
        for (let j = 1; j <= gridSize; j++) {
            let counter = 0
            const id = 'row' + i + '_' + 'col' + j
            if (mapPositionsRows.includes(i) && mapPositionsColumns.includes(j)) {
                const wordToFill = words.findIndex(e => (e.positions[0] === i) && (e.positions[1] === j))
                grid.push(<Tile gridSize id={id} letter={words[wordToFill].word[0]} />)
                if (counter < words[wordToFill].word.length) {
                } else {
                    counter = 0
                }
            } else {
                grid.push(<Tile gridSize id={id} letter={'z'} />)
            }

        }
    }

    return <div id="grid">{grid}</div>
}
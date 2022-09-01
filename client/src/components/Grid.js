import React from 'react'
import Tile from './Tile'

let gridSize = 20

export default function Grid() {
    let grid = []
    let word = 'word'
    let gridSize = 20

    let startingPosition = [5, 5]

    for (let i = 1; i <= gridSize; i++) {
        for (let j = 1; j <= gridSize; j++) {
            const id = 'row' + i + '_' + 'col' + j
            grid.push(<Tile gridSize id={id} word={word}/>)
        }
    }

    return <div id="grid">{grid}</div>
}
import React from 'react'

let gridSize = 20

export default function Grid() {
    let grid = []
    let word = 'word'

    let startingPosition = [5, 5]

    for (let i = 1; i <= gridSize; i++) {
        for (let j = 1; j <= gridSize; j++) {
            const id = 'row' + i + '_' + 'col' + j
            grid.push(<div className="Tile" id={id}>
                {(i === startingPosition[0] && j === startingPosition[1]) ? <p>{word[0]}</p> : <></>}
                {(i === startingPosition[0] && j === startingPosition[1] + 1) ? <p>{word[1]}</p> : <></>}
                {(i === startingPosition[0] && j === startingPosition[1] + 2) ? <p>{word[2]}</p> : <></>}
                {(i === startingPosition[0] && j === startingPosition[1] + 3) ? <p>{word[3]}</p> : <></>}
            </div>)
        }
    }

    return <div id="grid">{grid}</div>
}
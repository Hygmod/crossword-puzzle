import React from 'react'

let gridSize = 20

export default function Grid() {
    let grid = []

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const id='row' + i + '_' + 'col' +j
            grid.push(<div className="gridTile" id={id}>{i},{j}</div>)
        }
    }

    return <div id="grid">{grid}</div>
}
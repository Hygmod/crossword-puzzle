import React from "react"
import Tile from "./Tile"
import wordList from "../wordList"

const numberOfWordsToAdd = 10

let gridSize = 20

export default function Grid() {
  const wordListLength = wordList.length

  const letterPositionsOnGrid = []
  let grid = []
  let words = [

  ]
  for (let i = 1; i <= numberOfWordsToAdd; i++) {
    const randomWord = wordList[Math.floor(Math.random() * wordListLength)]
    const minRandomNumber = 1
    const maxRandomNumber = 15
    const randomwRow = Math.floor(Math.random() * (maxRandomNumber - minRandomNumber) + minRandomNumber)
    const randomColumn = Math.floor(Math.random() * (maxRandomNumber - minRandomNumber) + minRandomNumber)
    const randomOrientation = Math.random() > 0.5

    words.push({
      word: randomWord,
      startPosition: [randomwRow, randomColumn],
      isHorizontal: randomOrientation,
      positions: [],
    })
  }

  words.forEach((w) => {
    const wordLength = w.word.length

    letterPositionsOnGrid.push({
      position: w.startPosition,
      letter: w.word[0],
    })

    if (w.isHorizontal) {
      for (let i = 1; i < wordLength; i++) {
        letterPositionsOnGrid.push({
          position: [w.startPosition[0], w.startPosition[1] + i],
          letter: w.word[i],
        })
      }
    } else {
      for (let i = 1; i < wordLength; i++) {
        letterPositionsOnGrid.push({
          position: [w.startPosition[0] + i, w.startPosition[1]],
          letter: w.word[i],
        })
      }
    }
  })

  for (let row = 1; row <= gridSize; row++) {
    for (let column = 1; column <= gridSize; column++) {
      const id = `row${row}_col${column}`
      const letter = letterPositionsOnGrid.filter((element) => element.position[0] === row && element.position[1] === column)
      grid.push(<Tile id={id} key={id} className={letter[0] ? "hasLetter" : ""} letter={letter[0] ? letter[0].letter : ""} />)
    }
  }

  return (
    <div id="grid" key="grid">
      {grid}
    </div>
  )
}

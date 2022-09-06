import React from "react"
import Tile from "./Tile"
import wordList from "../wordList"



let gridSize = 20

export default function Grid() {
  const wordListLength = wordList.length
  let randomWord = wordList[Math.floor(Math.random() * wordListLength)]

  console.log(randomWord)
  
  const letterPositionsOnGrid = []
  let grid = []
  let words = [
    {
      word: "bark",
      startPosition: [1, Math.floor(Math.random() * (6-3)+3)],
      isHorizontal: true,
      positions: [],
    },
    {
      word: "bite",
      startPosition: [Math.floor(Math.random() * (6-3)+3), 3],
      isHorizontal: false,
      positions: [],
    },
  ]

  words.push({
    word: randomWord,
    startPosition: [2, Math.floor(Math.random() * (6-3)+3)],
    isHorizontal: true,
    positions: [],
  })

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

  console.log(letterPositionsOnGrid)

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

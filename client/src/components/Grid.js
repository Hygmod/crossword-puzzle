import React from "react"
import Tile from "./Tile"
import importedWordList from "../wordList"

let wordList = importedWordList

const numberOfWordsToAdd = 1000

let gridSize = 20

export default function Grid() {
 // let shortestWord = wordList.reduce((a, c) => (c.length <= a.length ? c : a)).length
  const letterPositionsOnGrid = []
  let grid = []
  let words = []

  //Check if word fits on grid
  const checkToSeeIfTheWordWillFitOnTheGrid = function (w) {
    if (w.isHorizontal) {
      if (w.word.length + w.startPosition[1] > 20) {
        return false
      } else return true
    } else {
      if (w.word.length + w.startPosition[0] > 20) {
        return false
      } else return true
    }
  }

  //Check if word overlaps or neighbors a same-orientation word
  const checkIfWordOverlapsOrNeighborsASameOrientationWord = function (w) {
    let y = w.isHorizontal ? 0 : 1
    let x = w.isHorizontal ? 1 : 0
    const arr = []
    for (let i = w.startPosition[x]; i < w.startPosition[x] + w.word.length; i++) {
      arr.push(i)
    }
    const sharesOppositeOrientationPositions = letterPositionsOnGrid.map((e) =>arr.includes(e.position[x])).includes(true)
    const overlapsAnotherWord = letterPositionsOnGrid.filter((e) => {
      return (e.position[y] === w.startPosition[y] || e.position[y] === w.startPosition[y] + 1 || e.position[y] === w.startPosition[y] - 1) && sharesOppositeOrientationPositions
    })
    return overlapsAnotherWord.length > 0
  }

  const addLetterPostions = function (w) {
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
  }

let counterPre = 0
let counterPost = 0


  for (let i = 1; i <= numberOfWordsToAdd; i++) {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)]
    const minRandomNumber = 1
    const maxRandomNumber = gridSize - randomWord.length
    const randomwRow = Math.floor(Math.random() * (maxRandomNumber - minRandomNumber) + minRandomNumber)
    const randomColumn = Math.floor(Math.random() * (maxRandomNumber - minRandomNumber) + minRandomNumber)
    const randomOrientation = Math.random() > 0.5

    const currentWord = {
      word: randomWord,
      startPosition: [randomwRow, randomColumn],
      isHorizontal: randomOrientation,
      // positions: [],
    }
counterPre++
    

    //Check if word fits on grid
    const wordWillFit = checkToSeeIfTheWordWillFitOnTheGrid(currentWord)

    //Check if word overlaps or neighbors a same-orientation word
    const overlapsWithAnotherWord = checkIfWordOverlapsOrNeighborsASameOrientationWord(currentWord)

    //Check if overlaps occur with different-orientation word, and if so, with same letter

    if (wordWillFit && !overlapsWithAnotherWord && wordList.length>1) {
      addLetterPostions(currentWord)
      wordList = wordList.filter((e) => e !== currentWord.word)
      console.log(wordList.length)
     
      words.push(currentWord)

      counterPost++
    }
  }

  console.log(`counterPre = ${counterPre}`)
  console.log(`counterPost = ${counterPost}`)

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

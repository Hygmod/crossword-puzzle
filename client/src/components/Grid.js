import React from "react";
import Tile from "./Tile";

let gridSize = 20;

export default function Grid() {
  let grid = [];
  let words = [
    {
      word: "bark",
      startPosition: [1, 3],
    },
    {
      word: "bite",
      startPosition: [3, 3],
    },
  ];
  const mapPositions = words.map((e) => e.startPosition);
  const mapPositionsRows = mapPositions.map((e) => e[0]);
  const mapPositionsColumns = mapPositions.map((e) => e[1]);

  for (let i = 1; i <= gridSize; i++) {
    for (let j = 1; j <= gridSize; j++) {
      const id = `row${i}_col${j}`;
      grid.push(<Tile gridSize id={id} key={id} letter="b" />);
    }
  }

  return (
    <div id="grid" key="grid">
      {grid}
    </div>
  );
}

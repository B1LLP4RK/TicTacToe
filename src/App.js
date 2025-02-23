import { useState } from "react";

function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
    {value}
    </button>
  );
}


export default function Board() {
  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  function handleClick(i) {
    if (boardState[i] == "X" | boardState[i] == "O") {
      return;
    }
    const newBoardState = boardState.slice();
    if (xIsNext) {
      newBoardState[i] = "X";
    } else {
      newBoardState[i] = "O";
    }
    setBoardState(newBoardState);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className="board-row">
        <Square value = {boardState[0]} onSquareClick = {() => {handleClick(0)}}/>
        <Square value = {boardState[1]} onSquareClick = {() => {handleClick(1)}}/>
        <Square value = {boardState[2]} onSquareClick = {() => {handleClick(2)}}/>
      </div>                                                          
      <div className="board-row">                                     
        <Square value = {boardState[3]} onSquareClick = {() => {handleClick(3)}}/>
        <Square value = {boardState[4]} onSquareClick = {() => {handleClick(4)}}/>
        <Square value = {boardState[5]} onSquareClick = {() => {handleClick(5)}}/>
      </div>                                                          
      <div className="board-row">                                     
        <Square value = {boardState[6]} onSquareClick = {() => {handleClick(6)}}/>
        <Square value = {boardState[7]} onSquareClick = {() => {handleClick(7)}}/>
        <Square value = {boardState[8]} onSquareClick = {() => {handleClick(8)}}/>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
      return squares[a];
    }
  }
  return null;
}

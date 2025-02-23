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
  function handleClick(i) {
    const newBoardState = boardState.slice();
    newBoardState[i] = "X";
    setBoardState(newBoardState);
  }
  return (
    <>
      <div className="board-row">
        <Square value = {boardState[0]} onSquareClick = {handleClick(0)}/>
        <Square value = {boardState[1]} onSquareClick = {handleClick(1)}/>
        <Square value = {boardState[2]} onSquareClick = {handleClick(2)}/>
      </div>                                                          
      <div className="board-row">                                     
        <Square value = {boardState[3]} onSquareClick = {handleClick(3)}/>
        <Square value = {boardState[4]} onSquareClick = {handleClick(4)}/>
        <Square value = {boardState[5]} onSquareClick = {handleClick(5)}/>
      </div>                                                          
      <div className="board-row">                                     
        <Square value = {boardState[6]} onSquareClick = {handleClick(6)}/>
        <Square value = {boardState[7]} onSquareClick = {handleClick(7)}/>
        <Square value = {boardState[8]} onSquareClick = {handleClick(8)}/>
      </div>
    </>
  );
}

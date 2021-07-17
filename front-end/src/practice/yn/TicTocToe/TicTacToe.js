import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import './TicTacToe.css';

function initBoard() {
    let board =[];
    for (let i=0;i<9;++i){
        board.push({index: i, value: ''})
    }
    return board;
}

function TicTacToe() {
    const board = initBoard();
    const [squares, updateSquares] =  useState(board);
    const[currentMark, updateCurrentMark] = useState('x');
    
    function boardIsFull(){
        for (let i=0;i<squares.length;i++){
            if (squares[i].value === "")return false;
        }
        return true;
     }

    function doMove(square){
        let newSquares=[...squares];
        newSquares[square.index].value=currentMark;
        updateCurrentMark(currentMark==='x'?'o':'x');
        updateSquares(newSquares);

    }
    function getWinner() {
        const possibleLines = [
          [1, 4, 7], 
          [0, 1, 2], 
          [0, 3, 6], 
          [0, 4, 8], 
          [2, 5, 8], 
          [2, 4, 6],
          [3, 4, 5], 
          [6, 7, 8], 
        ];
        for (let i=0; i<possibleLines.length; ++i) {
          const [index1, index2, index3] = possibleLines[i];
          if (squares[index1].value && 
              (squares[index1].value === squares[index2].value) &&
              (squares[index1].value === squares[index3].value) ) {
            return squares[index1].value;
          }
        }
        return null;
      }

    function getStatus(){
        let winner =getWinner();
        if(winner){
            return `${winner} won!`;    
         }
         else if (boardIsFull()){
             return "is drow"
         }
        else {
            return `next player: ${currentMark}`
        }
    }
        

  return (
    <>
    <div class="game">
    <Button onClick={()=> {
        updateSquares(initBoard());
        updateCurrentMark('X');
      }}>
        Restart
      </Button>
        <div class="ststus">{getStatus()}</div>
        <div className= "board">
        {squares.map(x=><Button variant="primary" size ="sm" onClick={()=>doMove(x)}>{x.value}</Button>)}
        </div>
    </div>
    </>
  );
}
export default TicTacToe;
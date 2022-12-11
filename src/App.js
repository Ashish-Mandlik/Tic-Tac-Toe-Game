import React ,{useState} from 'react';
import './App.css';
// import Box from "./component/box"
import Board from "./component/board"
import ScoreBoard from '../src/component/scoreBoard';
import Reset from "../src/component/reset"

function App() {
  
  const WIN_CONDITION = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]



  const [board,setBoard]=useState(Array(9).fill(null))
  const [xplayer,setXplayer]=useState(true)
  const [score,setScore]=useState({xScore:0,oScore:0})
  const [gameOver,setGameOver]=useState(false)
  // const board = ["X","X","X","X","X","X","X","X","X"]
  const handleBoxClick=(boxIdx)=>{
    const updatedBoard =board.map((value,idx)=>{
      if(idx===boxIdx){
        return xplayer === true ? "X" :"O"
      }
      else{
        return value;
      }
    })

    const winner=checkWinner(updatedBoard);

    if (winner){
      if(winner==="O"){
        let {oScore}=score;
        oScore+=1;
        setScore({...score,oScore})
      }else{
        let {xScore}=score;
        xScore+=1;
        setScore({...score,xScore})

      }
    }
    // console.log(score)

    setBoard(updatedBoard);
    setXplayer(!xplayer)
  }

  const checkWinner =(board)=>{
    for (let i=0;i<WIN_CONDITION.length ;i++){
      const [x,y,z]=WIN_CONDITION[i];
      if(board[x] && board[x]===board[y] && board[y]=== board[z]){
        setGameOver(true)
        return board[x];
      }
    }
  }

  const resetBoard=()=>{
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }

  return (
    <>
      <div className='app'>
        <h1 className='heading'>TIC-TAC-TOE</h1>
        <ScoreBoard score={score} xplayer={xplayer} />
        <Board board={board} onClick={gameOver ? resetBoard :handleBoxClick} />
        {/* <Box value="O" onClick={null}/> */}
        <Reset resetBoard={resetBoard}/>
      </div>
    </>
   
  );
}

export default App;

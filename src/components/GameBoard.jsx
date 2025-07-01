import { useContext } from "react"
import { GameContext } from "../UseGame" 
import ScoreCard from "./ScoreCard"

function GameBoard() {
    const {gameBoard, whackAMole} = useContext(GameContext);
    console.log(gameBoard);
    return (
      <>
      <ScoreCard/>
      <ul className="field">
      {gameBoard.map((moleHole, i) => moleHole ? <li key={i} className="mole hole" onClick={whackAMole}/> : <li key={i} className="hole"/>)}
      </ul>
      {/*Add the Score Card Component*/}
     {/* map over game board and create a div for each true false value, if false, create a div with the className .hole,otherwise give it the className .hole AND .mole  */}
     {/*Each div should have a click event  = whackAMole*/}
      </>
    )
  }
  
  export default GameBoard
import { useContext } from "react"
import { GameContext } from "../UseGame" 

function GameBoard() {
    const {gameBoard, whackAMole} = useContext(GameContext)
    console.log(gameBoard)
    return (
      <>
      <h1>Whack-A-Mole</h1>
      <div></div>
      {/*Add the Score Card Component*/}
     {/* map over game board and create a div for each true false value, if false, create a div with the className .hole,otherwise give it the className .hole AND .mole  */}
     {/*Each div should have a click event  = whackAMole*/}
  
      </>
    )
  }
  
  export default GameBoard
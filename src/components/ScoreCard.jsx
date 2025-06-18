import { useContext } from "react"
import { GameContext } from "../UseGame" 
function ScoreCard() {
    const {score, setPLaying} = useContext(GameContext)

    return (
      <>
     <h1>Score Card</h1>
     <button>RestartGame setPlaying(false)</button>
  
      </>
    )
  }
  
  export default ScoreCard
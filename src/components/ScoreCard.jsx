import { useContext } from "react"
import { GameContext } from "../UseGame" 
function ScoreCard() {
    const {score, setPlaying} = useContext(GameContext);

    return (
    <>
     <p className="scorecard">Score: {score}</p>
     <button onClick={()=>setPlaying(false)} score={score}>Restart</button>
      </>
    )
  }
  
  export default ScoreCard
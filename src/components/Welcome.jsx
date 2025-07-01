import { useContext } from "react"
import { GameContext } from "../UseGame" 
function Welcome() {
    const {setPlaying} = useContext(GameContext);

    return (
      <>
     <p>Welcome to Whack a Mole!</p>
     <p>Whack a mole to earn points.</p>
     <p>How many can you get?</p>
     <button onClick={()=>{setPlaying(true) }}>Play</button>
      </>
    )
  }
  
  export default Welcome
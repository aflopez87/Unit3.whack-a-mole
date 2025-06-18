import { useContext } from "react"
import { GameContext } from "../UseGame" 
function Welcome() {
    const {setPlaying} = useContext(GameContext)

    return (
      <>
     <h1>Welcome Screen</h1>
     <button>Add an Onclick that setPlaying(true)</button>
      </>
    )
  }
  
  export default Welcome
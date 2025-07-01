import { useState, useContext } from 'react'
import { GameContext } from './UseGame'
import GameBoard from './components/GameBoard'
import Welcome from './components/Welcome'

function App() {
const {playing, setPlaying} = useContext(GameContext)

  return (
    <div className="App">
   <h1>Whack a Mole</h1>
   {/* Conditional logic that will switch between a welcome page and a game page */
    playing ? <GameBoard/> : <Welcome/>
   }

    </div>
  )
}

export default App
import { useState, useContext } from 'react'
import { GameContext } from './UseGame'
import GameBoard from './components/GameBoard'

function App() {
const {playing, setPlaying} = useContext(GameContext)

  return (
    <>
    <GameBoard/>
   {/* Conditional logic that will switch between a welcome page and a game page */
    
   }

    </>
  )
}

export default App
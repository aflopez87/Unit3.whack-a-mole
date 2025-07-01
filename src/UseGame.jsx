import React, {useState} from "react";
import { useEffect } from "react";
const GameContext = React.createContext()

const GameProvider = ({children})=>{
    const [playing, setPlaying] = useState(false);
    const [score, setScore] =useState(0);
    const [gameBoard, setGameBoard] = useState(makeBoard());

    function makeBoard(){
        const molePlacement = Math.floor(Math.random()*9);
        const arr = Array.from({length:9}).map((value,i)=>i===molePlacement?true:false);
        return arr
    }
 
    const whackAMole = ()=>{
        setGameBoard(makeBoard());
        setScore(score+1);
    }

    useEffect(()=>{if (!playing) setScore(0)}, [playing]);

    //we will create an array of true false values
    //we will render them as divs with the appropriate backgrouds <----maybe somewhere else?
    //when a user clicks on the mole the board will be rerendered

    return(
        <GameContext.Provider value={{playing, setPlaying, gameBoard, whackAMole, score, setScore }}>
            {children}
        </GameContext.Provider>

    )
}

export {GameContext, GameProvider}
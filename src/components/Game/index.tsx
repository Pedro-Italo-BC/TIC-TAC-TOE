import { TicTacToeGame } from './components/TicTacToeGame'
import { ChoiseFirstPlayer } from './components/ChoiseFirstPlayer'
import { Winner } from './components/Winner'
import { GameContainer } from './styles'
import { useState } from 'react'

export type Players = null | 'x' | 'circle'

export type WinnerType = Players | 'draw'

export function Game() {
  const [currentTurn, setCurrentTurn] = useState<Players>(null)

  const [winner, setWinner] = useState<WinnerType>(null)

  function something() {
    if (currentTurn && !winner) {
      return (
        <TicTacToeGame
          currentTurn={currentTurn}
          setCurrentTurn={setCurrentTurn}
          setWinner={setWinner}
        />
      )
    } else if (winner && !currentTurn) {
      return <Winner winner={winner} restartState={setWinner} />
    } else {
      return <ChoiseFirstPlayer setCurrentPlayer={setCurrentTurn} />
    }
  }

  return <GameContainer>{something()}</GameContainer>
}

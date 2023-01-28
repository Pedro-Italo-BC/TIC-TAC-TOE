import { TicTacToeGame } from './components/TicTacToeGame'
import { ChoiseFirstPlayer } from './components/ChoiseFirstPlayer'
import { Winner } from './components/Winner'
import { ChoisePlayersQuantity } from './components/ChoisePlayersQuantity'
import { GameContainer } from './styles'
import { useState } from 'react'

export type PlayersType = null | 'x' | 'circle'

export type WinnerType = PlayersType | 'draw'

export type PlayersQuantityType = 'singlePlayer' | 'multiplayer' | null

export interface PlayersObjType {
  firstPlayer: PlayersType
  secondPlayer: PlayersType
}

export function Game() {
  const [currentTurn, setCurrentTurn] = useState<PlayersType>(null)

  const [players, setPlayers] = useState<PlayersObjType>({
    firstPlayer: null,
    secondPlayer: null,
  })

  const [winner, setWinner] = useState<WinnerType>(null)

  const [playersQuantity, setPlayersQuantity] =
    useState<PlayersQuantityType>(null)

  console.log(players)

  function pagesSelector() {
    if (currentTurn && !winner) {
      return (
        <TicTacToeGame
          currentTurn={currentTurn}
          setCurrentTurn={setCurrentTurn}
          setWinner={setWinner}
          setPlayersQuantity={setPlayersQuantity}
          playersQuantity={playersQuantity}
          players={players}
          setPlayers={setPlayers}
        />
      )
    } else if (winner && !currentTurn) {
      return <Winner winner={winner} restartState={setWinner} />
    } else if (!currentTurn && !winner && playersQuantity) {
      return (
        <ChoiseFirstPlayer
          setCurrentPlayer={setCurrentTurn}
          setPlayers={setPlayers}
        />
      )
    } else {
      return <ChoisePlayersQuantity setPlayersQuantity={setPlayersQuantity} />
    }
  }

  return <GameContainer>{pagesSelector()}</GameContainer>
}

import {
  Button,
  ButtonContainer,
  ChoiseContainer,
  Container,
  Text,
} from './styles'

import Circle from '../../../../assets/PlayersElement/Circle.svg'

import X from '../../../../assets/PlayersElement/X.svg'
import { Dispatch, SetStateAction } from 'react'
import { PlayersObjType, PlayersType } from '../..'

interface setCurrentPlayer {
  setCurrentPlayer: Dispatch<SetStateAction<PlayersType>>
  setPlayers: Dispatch<SetStateAction<PlayersObjType>>
}

export function ChoiseFirstPlayer({
  setCurrentPlayer,
  setPlayers,
}: setCurrentPlayer) {
  function handleChooseFirstPlayer(player: 'x' | 'circle') {
    setCurrentPlayer(player)
    setPlayers({
      firstPlayer: player,
      secondPlayer: player === 'x' ? 'circle' : 'x',
    })
  }

  return (
    <Container>
      <Text>TIC-TAC-TOE</Text>
      <ChoiseContainer>
        <span>Pick who goes first</span>

        <ButtonContainer>
          <Button onClick={() => handleChooseFirstPlayer('x')}>
            <img src={X} alt="X" draggable="false" />
          </Button>
          <Button onClick={() => handleChooseFirstPlayer('circle')}>
            <img src={Circle} alt="Circle" draggable="false" />
          </Button>
        </ButtonContainer>
      </ChoiseContainer>
    </Container>
  )
}

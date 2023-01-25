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
import { Players } from '../..'

interface setCurrentPlayer {
  setCurrentPlayer: Dispatch<SetStateAction<Players>>
}

export function ChoiseFirstPlayer({ setCurrentPlayer }: setCurrentPlayer) {
  function handleChooseFirstPlayer(player: 'x' | 'circle') {
    setCurrentPlayer(player)
  }

  return (
    <Container>
      <Text>TIC-TAC-TOE</Text>
      <ChoiseContainer>
        <span>Pick who goes first?</span>

        <ButtonContainer>
          <Button onClick={() => handleChooseFirstPlayer('x')}>
            <img src={X} alt="X" />
          </Button>
          <Button onClick={() => handleChooseFirstPlayer('circle')}>
            <img src={Circle} alt="Circle" />
          </Button>
        </ButtonContainer>
      </ChoiseContainer>
    </Container>
  )
}

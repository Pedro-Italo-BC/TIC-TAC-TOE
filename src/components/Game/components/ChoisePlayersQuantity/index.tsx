import {
  Button,
  ButtonContainer,
  ChoiseContainer,
  Container,
  Text,
} from './styles'

import { Dispatch, SetStateAction } from 'react'
import { PlayersQuantityType } from '../..'

interface ChoisePlayersQuantityProps {
  setPlayersQuantity: Dispatch<SetStateAction<PlayersQuantityType>>
}

export function ChoisePlayersQuantity({
  setPlayersQuantity,
}: ChoisePlayersQuantityProps) {
  function handleChoisePlayersQuantity(value: PlayersQuantityType) {
    setPlayersQuantity(value)
  }

  return (
    <Container>
      <Text>TIC-TAC-TOE</Text>
      <ChoiseContainer>
        <span>Select game mode</span>

        <ButtonContainer>
          <Button onClick={() => handleChoisePlayersQuantity('singlePlayer')}>
            Single Player
          </Button>
          <Button onClick={() => handleChoisePlayersQuantity('multiplayer')}>
            Multi Player
          </Button>
        </ButtonContainer>
      </ChoiseContainer>
    </Container>
  )
}

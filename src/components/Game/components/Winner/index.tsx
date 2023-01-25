import { Container, Button } from './styles'
import { WinnerType } from '../..'
import React from 'react'

interface WinnerProps {
  winner: WinnerType
  restartState: React.Dispatch<React.SetStateAction<WinnerType>>
}

export function Winner({ winner, restartState }: WinnerProps) {
  return (
    <Container>
      <p>
        {winner !== 'draw'
          ? `${winner} victory!!`
          : 'The game ended in a draw!'}
      </p>

      <Button onClick={() => restartState(null)}>Restart</Button>
    </Container>
  )
}

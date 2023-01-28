import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Players, WinnerType } from '../..'
import {
  GameContent,
  GameArea,
  GameContainer,
  InfoContainer,
  PlayersTurn,
  GameButtonItem,
} from './styles'

import { ButtonItem } from '../ButtonItem'

interface TicTacToeGameProps {
  currentTurn: Players
  setCurrentTurn: Dispatch<SetStateAction<Players>>
  setWinner: Dispatch<SetStateAction<WinnerType>>
}

interface CheckedValueAmountData {
  x: number[]
  circle: number[]
}

export function TicTacToeGame({
  currentTurn,
  setCurrentTurn,
  setWinner,
}: TicTacToeGameProps) {
  const [itemsValue, setItemsValue] = useState<Players[]>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ])

  console.log(itemsValue)

  function onWinTheGame(value: WinnerType) {
    setCurrentTurn(null)
    setWinner(value)
  }

  function winCases() {
    const winningPossibilities = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [2, 4, 6],
      [0, 4, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ]

    const checkedValueAmount = itemsValue.reduce<CheckedValueAmountData>(
      (acc, cur, index) => {
        if (cur === 'circle') {
          return {
            x: [...acc.x],
            circle: [...acc.circle, index],
          }
        } else if (cur === 'x') {
          return {
            x: [...acc.x, index],
            circle: [...acc.circle],
          }
        }

        return acc
      },
      {
        x: [],
        circle: [],
      },
    )
    console.log(checkedValueAmount)

    const hasCirclesWon = winningPossibilities
      .reduce<boolean[]>((acc, cur) => {
        const currentContentValuesVerification = cur.every((item) => {
          return checkedValueAmount.circle.indexOf(item) !== -1
        })

        return [...acc, currentContentValuesVerification]
      }, [])
      .includes(true)

    const hasXWon = winningPossibilities
      .reduce<boolean[]>((acc, cur) => {
        const currentContentValuesVerification = cur.every((item) => {
          return checkedValueAmount.x.indexOf(item) !== -1
        })

        return [...acc, currentContentValuesVerification]
      }, [])
      .includes(true)

    if (hasCirclesWon) {
      onWinTheGame('circle')
    } else if (hasXWon) {
      onWinTheGame('x')
    } else if (
      itemsValue.length >= 9 &&
      itemsValue.every((value) => value != null)
    ) {
      onWinTheGame('draw')
    }
  }

  function handleAttributeItemValue(index: number) {
    const checkeds = itemsValue

    checkeds[index] = currentTurn

    setItemsValue(checkeds)
    if (currentTurn === 'circle') {
      setCurrentTurn('x')
    } else {
      setCurrentTurn('circle')
    }

    winCases()
  }

  return (
    <GameContainer>
      <InfoContainer>
        <PlayersTurn>{currentTurn + "'"}s turn</PlayersTurn>
      </InfoContainer>
      <GameContent>
        <GameArea>
          <tbody>
            <tr>
              <GameButtonItem>
                <ButtonItem
                  itemsValue={itemsValue}
                  handleAttributeItemValue={handleAttributeItemValue}
                  index={0}
                />
              </GameButtonItem>
              <GameButtonItem>
                <ButtonItem
                  itemsValue={itemsValue}
                  handleAttributeItemValue={handleAttributeItemValue}
                  index={1}
                />
              </GameButtonItem>
              <GameButtonItem>
                <ButtonItem
                  itemsValue={itemsValue}
                  handleAttributeItemValue={handleAttributeItemValue}
                  index={2}
                />
              </GameButtonItem>
            </tr>
            <tr>
              <GameButtonItem>
                <ButtonItem
                  itemsValue={itemsValue}
                  handleAttributeItemValue={handleAttributeItemValue}
                  index={3}
                />
              </GameButtonItem>
              <GameButtonItem>
                <ButtonItem
                  itemsValue={itemsValue}
                  handleAttributeItemValue={handleAttributeItemValue}
                  index={4}
                />
              </GameButtonItem>
              <GameButtonItem>
                <ButtonItem
                  itemsValue={itemsValue}
                  handleAttributeItemValue={handleAttributeItemValue}
                  index={5}
                />
              </GameButtonItem>
            </tr>
            <tr>
              <GameButtonItem>
                <ButtonItem
                  itemsValue={itemsValue}
                  handleAttributeItemValue={handleAttributeItemValue}
                  index={6}
                />
              </GameButtonItem>
              <GameButtonItem>
                <ButtonItem
                  itemsValue={itemsValue}
                  handleAttributeItemValue={handleAttributeItemValue}
                  index={7}
                />
              </GameButtonItem>
              <GameButtonItem>
                <ButtonItem
                  itemsValue={itemsValue}
                  handleAttributeItemValue={handleAttributeItemValue}
                  index={8}
                />
              </GameButtonItem>
            </tr>
          </tbody>
        </GameArea>
      </GameContent>
    </GameContainer>
  )
}

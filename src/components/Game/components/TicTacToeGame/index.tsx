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

export interface ItemsValueData {
  index: number
  type: Players
}

interface TicTacToeGameProps {
  currentTurn: Players
  setCurrentTurn: Dispatch<SetStateAction<Players>>
  setWinner: Dispatch<SetStateAction<WinnerType>>
}

interface TimesValueAmountData {
  x: number[]
  circle: number[]
}

export function TicTacToeGame({
  currentTurn,
  setCurrentTurn,
  setWinner,
}: TicTacToeGameProps) {
  const [itemsValue, setItemsValue] = useState<ItemsValueData[]>([])

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

    const timesValueAmount = itemsValue.reduce<TimesValueAmountData>(
      (acc, cur) => {
        if (cur.type === 'circle') {
          return {
            x: [...acc.x],
            circle: [...acc.circle, cur.index],
          }
        } else if (cur.type === 'x') {
          return {
            x: [...acc.x, cur.index],
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

    const hasCirclesWon = winningPossibilities
      .reduce<boolean[]>((acc, cur) => {
        const currentContentValuesVerification = cur.every((item) => {
          return timesValueAmount.circle.indexOf(item) !== -1
        })

        return [...acc, currentContentValuesVerification]
      }, [])
      .includes(true)

    const hasXWon = winningPossibilities
      .reduce<boolean[]>((acc, cur) => {
        const currentContentValuesVerification = cur.every((item) => {
          return timesValueAmount.x.indexOf(item) !== -1
        })

        return [...acc, currentContentValuesVerification]
      }, [])
      .includes(true)

    if (hasCirclesWon) {
      onWinTheGame('circle')
    } else if (hasXWon) {
      onWinTheGame('x')
    } else if (itemsValue.length >= 9) {
      onWinTheGame('draw')
    }
  }

  useEffect(() => {
    winCases()
  }, [itemsValue])

  function handleAttributeItemValue(index: number) {
    setItemsValue((state) => [...state, { index, type: currentTurn }])
    if (currentTurn === 'circle') {
      setCurrentTurn('x')
    } else {
      setCurrentTurn('circle')
    }
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

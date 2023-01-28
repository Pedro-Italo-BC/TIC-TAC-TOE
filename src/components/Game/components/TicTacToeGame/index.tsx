import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
  PlayersType,
  PlayersQuantityType,
  WinnerType,
  PlayersObjType,
} from '../..'
import {
  GameContent,
  GameArea,
  GameContainer,
  InfoContainer,
  PlayersTurn,
  GameButtonItem,
} from './styles'

import { ButtonItem } from '../ButtonItem'
import { singlePlayer } from '../../../../utils/SinglePlayer'

interface TicTacToeGameProps {
  currentTurn: PlayersType
  setCurrentTurn: Dispatch<SetStateAction<PlayersType>>
  setWinner: Dispatch<SetStateAction<WinnerType>>
  setPlayersQuantity: Dispatch<SetStateAction<PlayersQuantityType>>
  playersQuantity: PlayersQuantityType
  players: PlayersObjType
  setPlayers: Dispatch<SetStateAction<PlayersObjType>>
}

interface CheckedValueAmountData {
  x: number[]
  circle: number[]
}

export function TicTacToeGame({
  currentTurn,
  setCurrentTurn,
  setWinner,
  setPlayersQuantity,
  playersQuantity,
  players,
  setPlayers,
}: TicTacToeGameProps) {
  const [itemsValue, setItemsValue] = useState<PlayersType[]>([
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

  const [blockedAction, setBlockedAction] = useState(false)

  function onWinTheGame(value: WinnerType) {
    setTimeout(() => {
      setCurrentTurn(null)
      setPlayersQuantity(null)
      setPlayers({
        firstPlayer: null,
        secondPlayer: null,
      })
      setWinner(value)
    }, 1000)
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
  }

  function botAction() {
    singlePlayer(
      itemsValue,
      setItemsValue,
      currentTurn,
      setCurrentTurn,
      players.secondPlayer,
      setBlockedAction,
    )

    if (players.secondPlayer === currentTurn) {
      setBlockedAction(true)
    }
  }

  useEffect(() => {
    if (playersQuantity === 'singlePlayer') {
      botAction()
    }
    winCases()
  }, [currentTurn])

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
                  blockedAction={blockedAction}
                  itemsValue={itemsValue}
                  handleAttributeItemValue={handleAttributeItemValue}
                  index={0}
                />
              </GameButtonItem>
              <GameButtonItem>
                <ButtonItem
                  blockedAction={blockedAction}
                  itemsValue={itemsValue}
                  handleAttributeItemValue={handleAttributeItemValue}
                  index={1}
                />
              </GameButtonItem>
              <GameButtonItem>
                <ButtonItem
                  blockedAction={blockedAction}
                  itemsValue={itemsValue}
                  handleAttributeItemValue={handleAttributeItemValue}
                  index={2}
                />
              </GameButtonItem>
            </tr>
            <tr>
              <GameButtonItem>
                <ButtonItem
                  blockedAction={blockedAction}
                  itemsValue={itemsValue}
                  handleAttributeItemValue={handleAttributeItemValue}
                  index={3}
                />
              </GameButtonItem>
              <GameButtonItem>
                <ButtonItem
                  blockedAction={blockedAction}
                  itemsValue={itemsValue}
                  handleAttributeItemValue={handleAttributeItemValue}
                  index={4}
                />
              </GameButtonItem>
              <GameButtonItem>
                <ButtonItem
                  blockedAction={blockedAction}
                  itemsValue={itemsValue}
                  handleAttributeItemValue={handleAttributeItemValue}
                  index={5}
                />
              </GameButtonItem>
            </tr>
            <tr>
              <GameButtonItem>
                <ButtonItem
                  blockedAction={blockedAction}
                  itemsValue={itemsValue}
                  handleAttributeItemValue={handleAttributeItemValue}
                  index={6}
                />
              </GameButtonItem>
              <GameButtonItem>
                <ButtonItem
                  blockedAction={blockedAction}
                  itemsValue={itemsValue}
                  handleAttributeItemValue={handleAttributeItemValue}
                  index={7}
                />
              </GameButtonItem>
              <GameButtonItem>
                <ButtonItem
                  blockedAction={blockedAction}
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

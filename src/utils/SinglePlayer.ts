import { Dispatch, SetStateAction } from 'react'
import { PlayersType } from '../components/Game'

export function singlePlayer(
  itemsValue: PlayersType[],
  setItemsValue: Dispatch<SetStateAction<PlayersType[]>>,
  currentTurn: PlayersType,
  setCurrentTurn: Dispatch<SetStateAction<PlayersType>>,
  botTurn: PlayersType,
  setBlockedAction: Dispatch<SetStateAction<boolean>>,
) {
  setTimeout(() => {
    if (botTurn === currentTurn) {
      const indexNowChecked = () => {
        const indices = []

        let idx = itemsValue.indexOf(null)
        while (idx !== -1) {
          indices.push(idx)
          idx = itemsValue.indexOf(null, idx + 1)
        }

        return indices
      }

      const randomChoise = Math.round(
        Math.random() * (indexNowChecked().length - 1),
      )

      const botChoise = indexNowChecked()[randomChoise]

      const newItems = itemsValue

      newItems[botChoise] = currentTurn

      setItemsValue(newItems)

      if (botTurn === 'x') {
        setCurrentTurn('circle')
      } else if (botTurn === 'circle') {
        setCurrentTurn('x')
      }

      setBlockedAction(false)
    }
  }, 1000)
}

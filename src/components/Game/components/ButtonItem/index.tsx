import { Button } from './styles'
import circle from '../../../../assets/PlayersElement/Circle.svg'
import x from '../../../../assets/PlayersElement/X.svg'

import { PlayersType } from '../..'

interface ButtonItemProps {
  index: number
  handleAttributeItemValue: (index: number) => void
  itemsValue: PlayersType[]
  blockedAction: boolean
}

export function ButtonItem({
  handleAttributeItemValue,
  index,
  itemsValue,
  blockedAction,
}: ButtonItemProps) {
  const pictureFunction = () => {
    if (itemsValue[index] === 'x') {
      return x
    } else if (itemsValue[index] === 'circle') {
      return circle
    } else {
      return ''
    }
  }

  const picture = pictureFunction()

  function handleClickButton() {
    const buttonAredyChecked =
      itemsValue.findIndex((value, idx) => idx === index && value !== null) !==
      -1

    if (!buttonAredyChecked) {
      handleAttributeItemValue(index)
    }
  }
  return (
    <Button onClick={handleClickButton} disabled={blockedAction}>
      <img src={picture} alt="" draggable={'false'} />
    </Button>
  )
}

import { Button } from './styles'
import circle from '../../../../assets/PlayersElement/Circle.svg'
import x from '../../../../assets/PlayersElement/X.svg'

import { ItemsValueData } from '../TicTacToeGame'

interface ButtonItemProps {
  index: number
  handleAttributeItemValue: (index: number) => void
  itemsValue: ItemsValueData[]
}

export function ButtonItem({
  handleAttributeItemValue,
  index,
  itemsValue,
}: ButtonItemProps) {
  const pictureFunction = () => {
    if (
      itemsValue.some((value) => value.index === index && value.type === 'x')
    ) {
      return x
    } else if (
      itemsValue.some(
        (value) => value.index === index && value.type === 'circle',
      )
    ) {
      return circle
    } else {
      return ''
    }
  }

  const picture = pictureFunction()

  function handleClickButton() {
    const buttonAredyChecked = itemsValue.some((item) => item.index === index)

    if (!buttonAredyChecked) {
      handleAttributeItemValue(index)
    }
  }
  return (
    <Button onClick={handleClickButton}>
      <img src={picture} alt="" />
    </Button>
  )
}

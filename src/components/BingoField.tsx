import { useState } from 'react'
import field from '../assets/bingoField.module.css'
import { FIELD_SIZE, FREE_CELL_INDEX } from '../consts'
import { useFrustratingPhrases } from '../hooks/useFrustratingPhrases'
import { BingoCell } from './BingoCell'

export const BingoField = () => {
  const { phrases } = useFrustratingPhrases()

  const initialCellStates: boolean[] = new Array(FIELD_SIZE).fill(false)
  initialCellStates[FREE_CELL_INDEX] = true
  const [cellStates, setCellStates] = useState<boolean[]>(initialCellStates)

  const cellClickHandler = (index: number): void => {
    if (index === FREE_CELL_INDEX) {
      return
    }

    const newCellStates = [...cellStates]
    newCellStates[index] = !newCellStates[index]
    setCellStates(newCellStates)
    console.log('>>>>> cellStates', cellStates)
  }

  return (
    <div className={field.container}>
      <div className={field.grid}>
        {phrases.map((phrase, index: number) =>
          <BingoCell
            key={index}
            text={phrase}
            isCrossed={cellStates[index]}
            onClick={() => cellClickHandler(index)}
          />)}
      </div>
    </div>
  )
}
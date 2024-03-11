import { useCallback, useEffect, useState } from 'react'
import field from '../assets/bingoField.module.css'
import { BINGO_LINES, FIELD_SIZE, FREE_CELL_INDEX } from '../consts'
import { useFrustratingPhrases } from '../hooks/useFrustratingPhrases'
import { BingoCell } from './BingoCell'
import { Reward } from './Reward'

export const BingoField = () => {
  const { phrases } = useFrustratingPhrases()
  const [winningLines, setWinningLines] = useState<number[][]>([])
  const [isRewardNeeded, setIsRewardNeeded] = useState<boolean>(false)

  const initialCellStates: boolean[] = new Array(FIELD_SIZE).fill(false)
  initialCellStates[FREE_CELL_INDEX] = true
  console.log('>>>>> initialCellStates', initialCellStates)
  const [cellStates, setCellStates] = useState<boolean[]>(initialCellStates)

  const findWinningLines = useCallback(() => {
    const innerWinningLines = BINGO_LINES.filter((line: number[]) => line.every((index: number) => cellStates[index] === true),
    )

    // console.log('>>>>> innerWinningLines', innerWinningLines)
    return innerWinningLines
  }, [cellStates])

  useEffect(() => {
    const newWinningLines = findWinningLines()

    if (newWinningLines.length > winningLines.length) {
      setIsRewardNeeded(true)
    } else {
      setIsRewardNeeded(false)
    }

    setWinningLines(newWinningLines)
    console.log('newWinningLines', newWinningLines)
  }, [cellStates, findWinningLines, winningLines.length])

  const cellClickHandler = useCallback((index: number): void => {
    if (index === FREE_CELL_INDEX) {
      return
    }

    const newCellStates = [...cellStates]
    newCellStates[index] = !newCellStates[index]
    console.log('>>>>> newCellStates', newCellStates)
    setCellStates(newCellStates)
  }, [cellStates])

  return (
    <div className={field.container}>
      <h2 className={field.title}>Slalom Bingo</h2>
      <div className={field.grid}>
        {phrases.map((phrase, index: number) => {
          const isWinning = winningLines.some((line) => line.includes(index))

          return (
            <BingoCell
              key={index}
              text={phrase}
              isCrossed={cellStates[index]}
              isWinning={isWinning}
              onClick={() => cellClickHandler(index)}
            />
          )
        })}
      </div>

      <Reward isNeeded={isRewardNeeded} />
    </div>
  )
}
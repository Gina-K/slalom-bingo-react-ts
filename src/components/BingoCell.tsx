import { MouseEventHandler } from 'react'

import cell from '../assets/bingoCell.module.css'

interface BingoCellProps {
  text: string
  isCrossed: boolean
  isWinning: boolean
  onClick: MouseEventHandler<HTMLDivElement>
}

export const BingoCell = ({ text, isCrossed, isWinning, onClick }: BingoCellProps) => {
  return (
    <>
      <div
        className={`${cell.container} ${isCrossed ? cell.crossed : ''} ${isWinning ? cell.winning : ''}`}
        onClick={onClick}
      >
        <span>{text}</span>
      </div>
    </>
  )
}
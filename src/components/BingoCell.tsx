import { MouseEventHandler } from 'react'

import cell from '../assets/bingoCell.module.css'

interface BingoCellProps {
  text: string
  isCrossed: boolean
  onClick: MouseEventHandler<HTMLDivElement>
}

export const BingoCell = ({ text, isCrossed, onClick }: BingoCellProps) => {
  return (
    <>
      <div className={`${cell.container} ${isCrossed ? cell.crossed : ''}`} onClick={onClick}>
        <span>{text}</span>
      </div>
    </>
  )
}
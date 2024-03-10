import cell from '../assets/bingoCell.module.css'

interface BingoCellProps {
  text: string
}

export const BingoCell = ({ text }: BingoCellProps) => {
  return (
    <>
      <div className={cell.container}>
        <span>{text}</span>
      </div>
    </>
  )
}
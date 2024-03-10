import field from '../assets/bingoField.module.css'
import { FRUSTRATING_PHRASES } from '../consts'
import { BingoCell } from './BingoCell'

export const BingoField = () => {
  return (
    <div className={field.container}>
      <div className={field.grid}>
        {FRUSTRATING_PHRASES.map((phrase) => <BingoCell text={phrase} />)}
      </div>
    </div>
  )
}
import field from '../assets/bingoField.module.css'
import { useFrustratingPhrases } from '../hooks/useFrustratingPhrases'
import { BingoCell } from './BingoCell'

export const BingoField = () => {
  const { phrases } = useFrustratingPhrases()

  return (
    <div className={field.container}>
      <div className={field.grid}>
        {phrases.map((phrase, index: number) => <BingoCell key={index} text={phrase} />)}
      </div>
    </div>
  )
}
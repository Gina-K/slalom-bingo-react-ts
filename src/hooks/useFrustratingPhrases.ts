import { useCallback, useState } from 'react'

import { FREE_CELL_INDEX, FRUSTRATING_PHRASES } from '../consts'
import { fisherYatesShuffle } from '../utils'

interface UseFrustratingPhrasesResult {
  phrases: string[]
  fillBingoField: () => void
}

export const useFrustratingPhrases = (): UseFrustratingPhrasesResult => {
  const [phrases, setPhrases] = useState<string[]>([])

  const fillBingoField = useCallback(() => {
    const shuffledPhrases = fisherYatesShuffle(FRUSTRATING_PHRASES)
    shuffledPhrases.splice(FREE_CELL_INDEX, 0, 'free slot')
    setPhrases(shuffledPhrases)
  }, [])

  return { phrases, fillBingoField }
}
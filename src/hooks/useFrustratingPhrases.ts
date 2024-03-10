import { useCallback, useEffect, useState } from 'react'

import { FIELD_SIZE, FRUSTRATING_PHRASES } from '../consts'

interface UseFrustratingPhrasesResult {
  phrases: string[]
}

export const useFrustratingPhrases = (): UseFrustratingPhrasesResult => {
  const [phrases, setPhrases] = useState<string[]>([])

  const fillBingoField = useCallback(() => {
    // TODO: replace with correct shuffle function
    const shuffledPhrases = FRUSTRATING_PHRASES.toSorted(() => Math.random() - 0.5)
    shuffledPhrases.splice(Math.floor(FIELD_SIZE / 2), 0, 'free')
    setPhrases(shuffledPhrases)
  }, [])

  useEffect(() => fillBingoField, [fillBingoField])

  return { phrases }
}
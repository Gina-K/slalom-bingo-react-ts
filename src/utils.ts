// Fisher–Yates shuffle algorithm
export const fisherYatesShuffle = <Type>(array: Type[]): Type[] => {
  const newArr = [...array]
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements newArr[i] and newArr[j]
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]]
  }

  return newArr
}
import { useEffect, useState } from 'react'

import fffuuuUrl from '../assets/imgs/pushen_fffuuu.gif'
import reward from '../assets/reward.module.css'

interface RewardProps {
  isNeeded: boolean
}

export const Reward = ({ isNeeded }: RewardProps) => {
  const [isRewardShown, setIsRewardShown] = useState<boolean>(false)

  const handleClick = () => setIsRewardShown(false)

  useEffect(() => {
    if (isNeeded) {
      setIsRewardShown(true)
      setTimeout(() => setIsRewardShown(false), 2000)
    }
  }, [isNeeded])

  return (
    <div className={`${reward.container} ${isRewardShown ? '' : reward.hidden}`} onClick={handleClick}>
      <img src={fffuuuUrl} alt="animation with Pusheen cat in rage" className={reward.img} />
    </div>
  )
}
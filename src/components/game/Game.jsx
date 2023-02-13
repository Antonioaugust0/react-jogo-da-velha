import styles from './Game.module.css'

import GameOptions from '../gameOptions/GameOptions'

function Game() {
  return(
    <div className={styles.game}>
      <GameOptions />
      <GameOptions />
      <GameOptions />
      <GameOptions />
      <GameOptions />
      <GameOptions />
      <GameOptions />
      <GameOptions />
      <GameOptions />
    </div>
  )
}

export default Game
import styles from './Score.module.css'

import Icon from '../icon/Icon'

function Score({ circleWinnerTimes, xWinnerTimes }) {
  return(
    <>
      <h4>Placar</h4>
      <div className={styles.score}>
        <div className={styles.scoreContent}>
          <Icon iconName="circle" />
          <h2 className={styles.circleScore}>
            {circleWinnerTimes}
          </h2>
        </div>
        <div className={styles.scoreContent}>
          <Icon iconName="x" />
          <h2 className={styles.xScore}>
            {xWinnerTimes}
          </h2>
        </div>
      </div>
    </>
  )
}

export default Score
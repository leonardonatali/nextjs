import styles from './integration2.module.css'

function integration2 (): JSX.Element {
  return (
    <div id={styles.integration2}>
        <div className={styles.red}>Text #1</div>
        <div className={styles.blue}>Text #2</div>
        <div className={styles.white}>Text #3</div>
    </div>
  )
}

export default integration2

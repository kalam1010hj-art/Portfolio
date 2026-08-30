
import styles from "../modules/Loading.module.css";

function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loader}>

        <div className={styles.ring}></div>

        <div className={styles.center}>
          <span></span>
        </div>

      </div>

      <div className={styles.text}>
        <span className={styles.loadingText}>Loading</span>
        <span className={styles.dots}>...</span>
      </div>
    </div>
  );
}

export default Loading;


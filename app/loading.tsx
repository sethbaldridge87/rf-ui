import styles from './loading.module.css';

export default function Loading() {
  return (
    <section className={styles.loading}>
      <div className={styles.loadBubbles}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  )
}
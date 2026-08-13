import styles from './loading.module.scss';

export default function Loading() {
  return (
    <section role="status" className={styles.loading}>
      <div aria-hidden="true" className={styles.loadBubbles}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  )
}
import styles from './Mission.module.css'

export default function Mission() {
  return (
    <section id="mission" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.labelRow} reveal`}>
          <span className={styles.label}>ॐ</span>
          <span className={styles.labelText}>The Founder Speaks</span>
          <span className={styles.label}>ॐ</span>
        </div>

        <h2 className={`${styles.heading} reveal reveal-delay-1`}>
          A Message from the Founder
        </h2>

        <div className="gold-divider reveal reveal-delay-2" />

        <div className={`${styles.quoteBlock} reveal reveal-delay-2`}>
          <div className={styles.quoteMark}>"</div>
          <p className={styles.quoteText}>
            As the creator and founder of the Kalki Secret Society — also known as the Kalki Intelligence Organization —
            I introduce before you the ultimate objective of our sacred order: to lead and guide the rise of a new civilization.
          </p>
          <p className={styles.quoteText}>
            The goals and objectives of this organization are not against nature, human civilization, or the eternal laws of the universe.
            We do not seek to destroy; we seek to illuminate. We do not seek power over others; we seek to restore
            the ancient light of wisdom in the age of darkness.
          </p>
          <p className={styles.quoteText}>
            This is not a rebellion. This is a renaissance — a sacred covenant between those who choose Dharma
            in an era when it is most forgotten.
          </p>
          <div className={styles.quoteMark} style={{ textAlign: 'right' }}>"</div>
        </div>

        <div className={`${styles.pillRow} reveal reveal-delay-3`}>
          {['Dharma', 'Truth', 'Liberation', 'Peace', 'Wisdom', 'Karma', 'Morality', 'Devotion'].map((v) => (
            <span key={v} className={styles.pill}>{v}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

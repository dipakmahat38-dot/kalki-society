import styles from './Objectives.module.css'

const objectives = [
  {
    number: 'I',
    title: 'A New World Order',
    text: 'Create a new society, a new empire, a new ideology, and a new political force — rooted in universal truth and divine wisdom.',
  },
  {
    number: 'II',
    title: 'Global Governance',
    text: 'Develop new ways to govern the world beyond the limitations of nations and states, guided by cosmic law and dharmic principles.',
  },
  {
    number: 'III',
    title: 'Spread of Knowledge',
    text: 'Spread correct and global knowledge among people — ancient wisdom meeting modern clarity — so that all may access the light of truth.',
  },
  {
    number: 'IV',
    title: 'Wisdom & Guidance',
    text: 'Provide proper wisdom and guidance to every soul seeking purpose, direction, and liberation from ignorance and suffering.',
  },
  {
    number: 'V',
    title: 'Liberation from Darkness',
    text: 'Help people escape the grip of negativity, delusion, and spiritual poverty that imprisons the mind and burdens the soul.',
  },
  {
    number: 'VI',
    title: 'Protect the New Generation',
    text: 'Shield our new generation from corruption, immorality, and sin — so they may inherit a world of virtue, not ruin.',
  },
]

export default function Objectives() {
  return (
    <section id="objectives" className={styles.section}>
      <div className={styles.bgPattern} aria-hidden="true" />

      <div className={styles.container}>
        <div className={`${styles.labelRow} reveal`}>
          <span className={styles.labelText}>Sacred Mandate</span>
        </div>

        <h2 className={`${styles.heading} reveal reveal-delay-1`}>
          Our Objectives
        </h2>

        <p className={`${styles.subheading} reveal reveal-delay-2`}>
          Six pillars upon which the new civilization shall rise
        </p>

        <div className="gold-divider reveal reveal-delay-2" />

        <div className={styles.grid}>
          {objectives.map((obj, i) => (
            <div
              key={obj.number}
              className={`${styles.card} reveal reveal-delay-${Math.min(i + 1, 5)}`}
            >
              <div className={styles.cardNumber}>{obj.number}</div>
              <div className={styles.cardInner}>
                <h3 className={styles.cardTitle}>{obj.title}</h3>
                <p className={styles.cardText}>{obj.text}</p>
              </div>
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

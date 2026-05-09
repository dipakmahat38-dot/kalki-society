import styles from './Foundation.module.css'

const thinkers = [
  { name: 'Plato', work: 'The Republic', note: 'The ideal state and the philosopher-king' },
  { name: 'Aristotle', work: 'Politics', note: 'The study of political governance and virtue' },
  { name: 'Left vs Right', work: 'The Great Debate', note: 'The division that has defined modern civilization' },
  { name: 'Bhagavad Gita', work: 'Krishna to Arjuna', note: 'The supreme teaching that transcends all ideologies' },
]

export default function Foundation() {
  return (
    <section id="foundation" className={styles.section}>
      <div className={styles.bgAccent} aria-hidden="true" />

      <div className={styles.container}>
        <p className={`${styles.eyebrow} reveal`}>Philosophical Foundation</p>
        <h2 className={`${styles.heading} reveal reveal-delay-1`}>
          Beyond All Ideologies
        </h2>
        <div className="gold-divider reveal reveal-delay-2" />

        <p className={`${styles.body} reveal reveal-delay-2`}>
          Before establishing this sacred constitution, the founders of the Kalki Intelligence Organization undertook
          a deep and rigorous study of the great historical conflicts between opposing ideologies — left and right,
          conservative and progressive, idealist and realist. We studied Plato's vision of the Republic, Aristotle's
          political philosophies, and the great debates that have shaped and divided human civilization.
        </p>

        <p className={`${styles.body} reveal reveal-delay-3`}>
          We did not do this to choose a side. We did this to transcend them all — to rise above the noise of partisan
          thought and arrive at a philosophy rooted not in politics, but in cosmic truth. Our foundation is not borrowed
          from any one tradition; it is the synthesis of all that is pure, wise, and eternal.
        </p>

        <div className={`${styles.thinkerGrid} reveal reveal-delay-3`}>
          {thinkers.map((t) => (
            <div key={t.name} className={styles.thinkerCard}>
              <h4 className={styles.thinkerName}>{t.name}</h4>
              <p className={styles.thinkerWork}>{t.work}</p>
              <p className={styles.thinkerNote}>{t.note}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.transcendBox} reveal reveal-delay-4`}>
          <div className={styles.transcendIcon}>⚡</div>
          <p className={styles.transcendText}>
            "We have studied all great human ideologies — not to adopt them, but to transcend them.
            The Kalki Constitution is written not in ink, but in the eternal language of Dharma."
          </p>
        </div>
      </div>
    </section>
  )
}

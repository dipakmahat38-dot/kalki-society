import styles from './Truth.module.css'

const truthPillars = [
  'Good Deeds', 'Karma', 'Freedom', 'Liberation', 'Love',
  'Truth', 'Peace', 'Penance', 'Spirituality', 'Morality',
]

export default function Truth() {
  return (
    <section id="truth" className={styles.section}>
      <div className={styles.container}>

        {/* Universal Truth */}
        <div className={styles.block}>
          <div className={`${styles.iconRow} reveal`}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <circle cx="24" cy="24" r="22" stroke="#D4AF37" strokeWidth="0.8" opacity="0.4" />
              <circle cx="24" cy="24" r="14" stroke="#D4AF37" strokeWidth="0.8" opacity="0.6" />
              <polygon points="24,8 30,20 18,20" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.8" />
              <polygon points="24,40 18,28 30,28" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.8" />
              <circle cx="24" cy="24" r="4" fill="rgba(212,175,55,0.3)" stroke="#D4AF37" strokeWidth="0.8" />
            </svg>
          </div>

          <p className={`${styles.eyebrow} reveal reveal-delay-1`}>Universal Truth</p>
          <h2 className={`${styles.heading} reveal reveal-delay-1`}>
            The Law of the Cosmos
          </h2>
          <div className="gold-divider reveal reveal-delay-2" />

          <p className={`${styles.body} reveal reveal-delay-2`}>
            Universal truth is every law that exists in favor of the cosmos — every principle that upholds life, virtue, and the
            sacred order of existence. It encompasses good deeds, karma, freedom, liberation, love, truth, peace, penance,
            spirituality, and morality. It is everything taught in the timeless words of the Bhagavad Gita and the four sacred Vedas.
          </p>

          <p className={`${styles.body} reveal reveal-delay-3`}>
            Our ancestors were moral, divine, and ethical. Their civilization was built not upon conquest, but upon consciousness.
            We do not wish for the new generation to lose these sacred values in the confusion of modernity. The noise of the
            modern world has dimmed the inner light — and it is our sacred duty to rekindle it.
          </p>

          <div className={`${styles.pillGrid} reveal reveal-delay-3`}>
            {truthPillars.map((p) => (
              <div key={p} className={styles.truthPill}>
                <span className={styles.pillDot} />
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`${styles.sectionDivider} reveal`} />

        {/* What We Stand Against */}
        <div className={styles.block}>
          <div className={`${styles.iconRow} reveal`}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <circle cx="24" cy="24" r="22" stroke="#D4AF37" strokeWidth="0.8" opacity="0.4" />
              <line x1="24" y1="4" x2="24" y2="44" stroke="#D4AF37" strokeWidth="0.8" opacity="0.5" />
              <line x1="4" y1="24" x2="44" y2="24" stroke="#D4AF37" strokeWidth="0.8" opacity="0.5" />
              <circle cx="24" cy="24" r="6" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.9" />
              <line x1="16" y1="16" x2="32" y2="32" stroke="#D4AF37" strokeWidth="1.2" opacity="0.7" />
            </svg>
          </div>

          <p className={`${styles.eyebrow} reveal reveal-delay-1`}>Our Stance</p>
          <h2 className={`${styles.heading} reveal reveal-delay-1`}>
            What We Stand Against
          </h2>
          <div className="gold-divider reveal reveal-delay-2" />

          <p className={`${styles.body} reveal reveal-delay-2`}>
            The Kalki Secret Society stands in firm opposition to anything that opposes universal truth, cosmic power,
            and the sacred wisdom of the Bhagavad Gita and the four Vedas. We oppose that which diminishes the human
            soul — corruption, immorality, and sin in all their forms.
          </p>

          <p className={`${styles.body} reveal reveal-delay-3`}>
            Let this be clearly understood: we do not destroy anything that stands against universal constitutions or laws.
            We do not engage in violence or vengeance. We simply stand as witnesses and guardians of truth — opposing
            corruption, immorality, and sin through wisdom, awareness, and sacred action.
          </p>

          <div className={`${styles.standAgainstGrid} reveal reveal-delay-4`}>
            {['Corruption', 'Immorality', 'Sin', 'Spiritual Ignorance', 'Moral Decay', 'Exploitation'].map((v) => (
              <div key={v} className={styles.againstItem}>
                <span className={styles.againstIcon}>✕</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

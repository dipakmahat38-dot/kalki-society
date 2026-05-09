import KalkiEmblem from './KalkiEmblem'
import styles from './Hero.module.css'

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero}>
      {/* Cosmic mandala backdrop */}
      <div className={styles.cosmosRing} aria-hidden="true" />
      <div className={styles.cosmosRing2} aria-hidden="true" />
      <div className={styles.cosmosRing3} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Mantra top */}
        <p className={`${styles.mantra} reveal reveal-delay-1`}>
          ॐ Warrior of Kalki's Light ॐ
        </p>

        {/* Emblem */}
        <div className={`${styles.emblemWrap} reveal reveal-delay-2`}>
          <KalkiEmblem />
        </div>

        {/* Title */}
        <h1 className={`${styles.title} reveal reveal-delay-2`}>
          <span className={styles.titleLine}>Kalki</span>
          <span className={styles.titleLine}>Secret Society</span>
        </h1>

        <p className={`${styles.subtitle} reveal reveal-delay-3`}>
          Kalki Intelligence Organization
        </p>

        <div className={`${styles.divider} reveal reveal-delay-3`} />

        <p className={`${styles.tagline} reveal reveal-delay-4`}>
          The Rise of a New Civilization
        </p>

        {/* Motto */}
        <div className={`${styles.mottoWrap} reveal reveal-delay-4`}>
          <span className={styles.mottoLine} />
          <p className={styles.motto}>
            <em>Yato Dharmastato Jaya</em>
          </p>
          <span className={styles.mottoLine} />
        </div>

        <p className={`${styles.mottoTranslation} reveal reveal-delay-5`}>
          Where there is Dharma, there is Victory
        </p>

        {/* CTA */}
        <div className={`${styles.ctaGroup} reveal reveal-delay-5`}>
          <button className={styles.ctaPrimary} onClick={() => handleScroll('#mission')}>
            Join the Movement
          </button>
          <button className={styles.ctaSecondary} onClick={() => handleScroll('#objectives')}>
            Our Purpose
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} onClick={() => handleScroll('#mission')} aria-label="Scroll down">
        <div className={styles.scrollLine} />
        <span>Descend</span>
      </div>
    </section>
  )
}

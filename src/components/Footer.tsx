import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.cosmicLine} />

      <div className={styles.inner}>
        {/* Emblem mini */}
        <div className={styles.miniEmblem} aria-hidden="true">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="28" stroke="#D4AF37" strokeWidth="0.6" opacity="0.4" />
            <polygon points="30,12 40,34 20,34" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.7" />
            <polygon points="30,48 20,26 40,26" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.7" />
            <circle cx="30" cy="30" r="7" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.6" />
            <text x="30" y="34" textAnchor="middle" fontSize="9" fill="#D4AF37" fontFamily="serif">ॐ</text>
          </svg>
        </div>

        <p className={styles.footerMantra}>ॐ Dharma Victory ॐ</p>

        <div className={styles.goldLine} />

        <p className={styles.footerTagline}>
          Kalki Intelligence Organization
        </p>
        <p className={styles.footerSub}>
          Guiding the world toward a new path.
        </p>

        <div className={styles.mottoRow}>
          <span className={styles.mottoDash} />
          <em className={styles.mottoFooter}>Yato Dharmastato Jaya</em>
          <span className={styles.mottoDash} />
        </div>

        <div className={styles.goldLine} style={{ marginTop: '3rem' }} />

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Kalki Secret Society — Kalki Intelligence Organization. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

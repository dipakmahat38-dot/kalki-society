import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Mission', href: '#mission' },
  { label: 'Objectives', href: '#objectives' },
  { label: 'Truth', href: '#truth' },
  { label: 'Foundation', href: '#foundation' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo} onClick={() => handleNav('#hero')}>
        <span className={styles.om}>ॐ</span>
        <span className={styles.logoText}>KSS</span>
      </div>

      <div className={`${styles.links} ${open ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <button key={link.label} className={styles.link} onClick={() => handleNav(link.href)}>
            {link.label}
          </button>
        ))}
        <button className={styles.joinBtn} onClick={() => handleNav('#hero')}>
          Enlighten
        </button>
      </div>

      <button
        className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}

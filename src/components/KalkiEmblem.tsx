import styles from './KalkiEmblem.module.css'

export default function KalkiEmblem() {
  return (
    <div className={styles.emblemWrapper}>
      <svg
        className={styles.emblem}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Kalki Sacred Emblem"
      >
        {/* Outer ring */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
        <circle cx="100" cy="100" r="88" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3" />

        {/* Rotating outer petals (lotus) */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180
          const x1 = 100 + 88 * Math.sin(angle)
          const y1 = 100 - 88 * Math.cos(angle)
          return (
            <line
              key={i}
              x1="100"
              y1="100"
              x2={x1}
              y2={y1}
              stroke="#D4AF37"
              strokeWidth="0.6"
              opacity="0.25"
            />
          )
        })}

        {/* Sri Yantra-inspired inner triangles */}
        {/* Upward triangle (Shiva / masculine) */}
        <polygon
          points="100,30 155,140 45,140"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.2"
          opacity="0.7"
        />
        {/* Downward triangle (Shakti / feminine) */}
        <polygon
          points="100,170 45,60 155,60"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.2"
          opacity="0.7"
        />

        {/* Inner circle */}
        <circle cx="100" cy="100" r="30" fill="rgba(212,175,55,0.05)" stroke="#D4AF37" strokeWidth="1" opacity="0.8" />
        <circle cx="100" cy="100" r="22" fill="rgba(212,175,55,0.06)" stroke="#D4AF37" strokeWidth="0.6" opacity="0.5" />

        {/* Rising Sun rays */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180
          const x1 = 100 + 22 * Math.sin(angle)
          const y1 = 100 - 22 * Math.cos(angle)
          const x2 = 100 + 30 * Math.sin(angle)
          const y2 = 100 - 30 * Math.cos(angle)
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#D4AF37" strokeWidth="1" opacity="0.9"
            />
          )
        })}

        {/* OM symbol center */}
        <text
          x="100"
          y="107"
          textAnchor="middle"
          fontSize="22"
          fill="#D4AF37"
          fontFamily="serif"
          opacity="0.95"
        >
          ॐ
        </text>

        {/* Sword symbol above OM — stylized */}
        <line x1="100" y1="6" x2="100" y2="26" stroke="#D4AF37" strokeWidth="1.5" opacity="0.8" />
        <line x1="96" y1="18" x2="104" y2="18" stroke="#D4AF37" strokeWidth="1.2" opacity="0.8" />
        <polygon points="100,4 97,10 103,10" fill="#D4AF37" opacity="0.8" />

        {/* Lotus petals inner ring */}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * 45 * Math.PI) / 180
          const cx = 100 + 55 * Math.sin(a)
          const cy = 100 - 55 * Math.cos(a)
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx="6"
              ry="10"
              transform={`rotate(${i * 45}, ${cx}, ${cy})`}
              fill="none"
              stroke="#D4AF37"
              strokeWidth="0.8"
              opacity="0.4"
            />
          )
        })}
      </svg>
    </div>
  )
}

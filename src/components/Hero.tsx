import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    el.classList.add('hero__title--visible')
  }, [])

  return (
    <header id="hero" className="hero">
      <div className="hero__particles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="hero__particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="hero__content">
        <p className="hero__era">Era das Cinzas — Século I pós-Colapso</p>
        <h1 ref={titleRef} className="hero__title">
          <span className="hero__title-line">NOVA</span>
          <span className="hero__title-line hero__title-line--accent">ARCA</span>
        </h1>
        <p className="hero__subtitle">O Bastião da Hipocrisia</p>
        <div className="hero__divider" aria-hidden="true">
          <span className="hero__divider-line" />
          <span className="hero__divider-diamond">◆</span>
          <span className="hero__divider-line" />
        </div>
        <p className="hero__tagline">
          "A paz em Nova Arca é apenas o silêncio de quem não tem voz para gritar,
          e a ordem é apenas o nome que os ricos dão ao medo dos pobres."
        </p>
        <a href="#origin" className="hero__cta">
          Desça às Profundezas
          <span className="hero__cta-arrow">↓</span>
        </a>
      </div>

      <div className="hero__vignette" aria-hidden="true" />
    </header>
  )
}

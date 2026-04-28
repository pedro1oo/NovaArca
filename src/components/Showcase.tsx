import { useEffect, useRef, useState } from 'react'
import novaArcaImg from '../assets/NovaArca.png'
import './Showcase.css'

export default function Showcase() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`showcase ${visible ? 'showcase--visible' : ''}`}>
      <div className="showcase__frame">
        <div className="showcase__corner showcase__corner--tl" aria-hidden="true" />
        <div className="showcase__corner showcase__corner--tr" aria-hidden="true" />
        <div className="showcase__corner showcase__corner--bl" aria-hidden="true" />
        <div className="showcase__corner showcase__corner--br" aria-hidden="true" />

        <div className="showcase__image-wrapper">
          <img
            src={novaArcaImg}
            alt="Ilustração de Nova Arca — metrópole medieval cyberpunk erguida nas crateras da guerra"
            className="showcase__image"
          />
          <div className="showcase__overlay" aria-hidden="true" />
          <div className="showcase__scanlines" aria-hidden="true" />
        </div>

        <div className="showcase__caption">
          <span className="showcase__caption-line" aria-hidden="true" />
          <p className="showcase__caption-text">
            Nova Arca — Era das Cinzas
          </p>
          <span className="showcase__caption-line" aria-hidden="true" />
        </div>
      </div>

      <p className="showcase__flavor">
        Uma metrópole que cresce para baixo, em direção ao abismo,
        e para cima, em direção ao luxo isolado.
      </p>
    </div>
  )
}

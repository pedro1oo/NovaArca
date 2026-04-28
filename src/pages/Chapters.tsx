import { Link } from 'react-router-dom'
import { chapters } from '../data/chapters'
import './Chapters.css'

export default function Chapters() {
  return (
    <div className="chapters-page">
      <nav className="chapters-page__nav">
        <Link to="/" className="chapters-page__back">
          <span>←</span> Nova Arca
        </Link>
      </nav>

      <header className="chapters-page__header">
        <span className="chapters-page__label">ARQUIVO CLANDESTINO</span>
        <h1 className="chapters-page__title">Capítulos</h1>
        <p className="chapters-page__subtitle">
          Registros interceptados das frequências proibidas de Nova Arca
        </p>
        <div className="chapters-page__divider" aria-hidden="true">
          <span className="chapters-page__divider-line" />
          <span className="chapters-page__divider-diamond">◆</span>
          <span className="chapters-page__divider-line" />
        </div>
      </header>

      <div className="chapters-page__list">
        {chapters.map((ch) => (
          <Link
            key={ch.slug}
            to={`/capitulos/${ch.slug}`}
            className="chapter-card"
          >
            <div className="chapter-card__number-col">
              <span className="chapter-card__number">
                {String(ch.number).padStart(2, '0')}
              </span>
            </div>

            <div className="chapter-card__content">
              <span className="chapter-card__location">{ch.location}</span>
              <h2 className="chapter-card__title">{ch.title}</h2>
              <span className="chapter-card__chrono">{ch.chronology}</span>
            </div>

            <div className="chapter-card__arrow" aria-hidden="true">
              →
            </div>

            <div className="chapter-card__border-glow" aria-hidden="true" />
          </Link>
        ))}

        {/* placeholder for future chapters */}
        <div className="chapter-card chapter-card--locked">
          <div className="chapter-card__number-col">
            <span className="chapter-card__number chapter-card__number--dim">
              04
            </span>
          </div>
          <div className="chapter-card__content">
            <span className="chapter-card__location">TRANSMISSÃO PENDENTE</span>
            <h2 className="chapter-card__title chapter-card__title--dim">
              ██████ ███ ████████
            </h2>
            <span className="chapter-card__chrono">Frequência não decodificada</span>
          </div>
          <div className="chapter-card__lock" aria-hidden="true">⬡</div>
        </div>
      </div>

      <footer className="chapters-page__footer">
        <span className="chapters-page__signal">
          <span className="chapters-page__dot" aria-hidden="true" />
          INTERCEPTANDO NOVAS FREQUÊNCIAS...
        </span>
      </footer>
    </div>
  )
}

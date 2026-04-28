import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { chapters } from '../data/chapters'
import './ChapterReader.css'

export default function ChapterReader() {
  const { slug } = useParams<{ slug: string }>()
  const chapter = chapters.find((c) => c.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!chapter) return <Navigate to="/capitulos" replace />

  const currentIndex = chapters.indexOf(chapter)
  const prev = chapters[currentIndex - 1]
  const next = chapters[currentIndex + 1]

  return (
    <div className="reader">
      <nav className="reader__nav">
        <Link to="/capitulos" className="reader__back">
          <span>←</span> Capítulos
        </Link>
      </nav>

      <header className="reader__header">
        <div className="reader__meta">
          <span className="reader__chapter-num">
            Capítulo {String(chapter.number).padStart(2, '0')}
          </span>
          <span className="reader__meta-sep" aria-hidden="true">|</span>
          <span className="reader__chrono">{chapter.chronology}</span>
        </div>

        <h1 className="reader__title">{chapter.title}</h1>

        <div className="reader__location">
          <span className="reader__location-icon" aria-hidden="true">◈</span>
          {chapter.location}
        </div>

        <div className="reader__header-line" aria-hidden="true" />
      </header>

      {chapter.image && (
        <figure className="reader__illustration">
          <img
            src={chapter.image.src}
            alt={chapter.image.alt}
            className="reader__illustration-img"
          />
          <figcaption className="reader__illustration-caption">
            {chapter.image.alt}
          </figcaption>
        </figure>
      )}

      <article className="reader__body">
        <div className="reader__drop-cap-line" aria-hidden="true" />
        {chapter.paragraphs.map((p, i) => {
          const isDialogue = p.startsWith('—')
          return (
            <p
              key={i}
              className={`reader__paragraph ${
                isDialogue ? 'reader__paragraph--dialogue' : ''
              } ${i === 0 ? 'reader__paragraph--first' : ''}`}
            >
              {p}
            </p>
          )
        })}
      </article>

      <footer className="reader__footer">
        <div className="reader__footer-line" aria-hidden="true" />

        <div className="reader__pagination">
          {prev ? (
            <Link to={`/capitulos/${prev.slug}`} className="reader__page-link">
              <span className="reader__page-arrow">←</span>
              <div>
                <span className="reader__page-label">Capítulo anterior</span>
                <span className="reader__page-title">{prev.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              to={`/capitulos/${next.slug}`}
              className="reader__page-link reader__page-link--next"
            >
              <div>
                <span className="reader__page-label">Próximo capítulo</span>
                <span className="reader__page-title">{next.title}</span>
              </div>
              <span className="reader__page-arrow">→</span>
            </Link>
          ) : (
            <div className="reader__end">
              <span className="reader__end-icon" aria-hidden="true">◆</span>
              <p>Fim da transmissão interceptada</p>
              <Link to="/capitulos" className="reader__end-link">
                Voltar ao arquivo
              </Link>
            </div>
          )}
        </div>

        <div className="reader__signal">
          <span className="reader__dot" aria-hidden="true" />
          FREQUÊNCIA DECODIFICADA — ARQUIVO ABERTO
        </div>
      </footer>
    </div>
  )
}

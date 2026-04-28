import SectionHeader from './SectionHeader'
import './Resistance.css'

export default function Resistance() {
  return (
    <section id="resistance" className="resistance">
      <SectionHeader
        number="CAPÍTULO IV"
        title="A Resistência Silenciosa"
        subtitle="Os Pobres Livres"
      />

      <div className="resistance__content">
        <blockquote className="resistance__question">
          <span className="resistance__quote-mark" aria-hidden="true">"</span>
          <p>Negar lutar uma guerra que você não escolheu é errado?</p>
          <span className="resistance__quote-mark resistance__quote-mark--end" aria-hidden="true">"</span>
        </blockquote>

        <p className="resistance__text">
          Essa dúvida é o combustível para um submundo de desertores e
          <span className="resistance__highlight"> "Pobres Livres"</span> que vivem nas
          bordas da rede, escondendo-se da vigilância com capas de retalhos e chips de
          identidade forjados em bigornas clandestinas.
        </p>

        <div className="resistance__items">
          <div className="resistance__item">
            <span className="resistance__item-icon" aria-hidden="true">◐</span>
            <div>
              <h4 className="resistance__item-title">Tavernas Enfumaçadas</h4>
              <p className="resistance__item-text">
                Onde a pergunta ecoa entre sussurros e o som de canecas de lata.
              </p>
            </div>
          </div>
          <div className="resistance__item">
            <span className="resistance__item-icon" aria-hidden="true">◑</span>
            <div>
              <h4 className="resistance__item-title">Becos Escuros</h4>
              <p className="resistance__item-text">
                Onde identidades são forjadas e a liberdade é comprada com silêncio.
              </p>
            </div>
          </div>
          <div className="resistance__item">
            <span className="resistance__item-icon" aria-hidden="true">◒</span>
            <div>
              <h4 className="resistance__item-title">Bordas da Rede</h4>
              <p className="resistance__item-text">
                Onde os invisíveis sobrevivem fora do alcance dos sensores corporativos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="resistance__final-quote">
        <div className="resistance__final-border" aria-hidden="true" />
        <p>
          "A paz em Nova Arca é apenas o silêncio de quem não tem voz para gritar,
          e a ordem é apenas o nome que os ricos dão ao medo dos pobres."
        </p>
      </div>
    </section>
  )
}

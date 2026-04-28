import SectionHeader from './SectionHeader'
import './Duality.css'

export default function Duality() {
  return (
    <section id="duality" className="duality">
      <SectionHeader
        number="CAPÍTULO III"
        title="O Dualismo de Nova Arca"
        subtitle="Um Paradoxo Vivo"
      />

      <p className="duality__intro">
        Nas ruas superiores, o comércio brilha com hologramas que prometem liberdade e
        ascensão social. Nas entranhas, o cheiro de esgoto se mistura ao cheiro de metal oxidado.
      </p>

      <div className="duality__split">
        <article className="duality__side duality__side--light">
          <div className="duality__side-glow duality__side-glow--light" aria-hidden="true" />
          <span className="duality__label">SUPERFÍCIE</span>
          <h3 className="duality__side-title">O Melhor Lugar</h3>
          <ul className="duality__list">
            <li>
              <span className="duality__bullet duality__bullet--light">◈</span>
              Código de acesso correto
            </li>
            <li>
              <span className="duality__bullet duality__bullet--light">◈</span>
              Medicina regenerativa — quase mágica
            </li>
            <li>
              <span className="duality__bullet duality__bullet--light">◈</span>
              Banquetes sintéticos da era pré-guerra
            </li>
          </ul>
          <div className="duality__hologram" aria-hidden="true">
            <span>LIBERDADE</span>
            <span>ASCENSÃO</span>
            <span>PROGRESSO</span>
          </div>
        </article>

        <div className="duality__center" aria-hidden="true">
          <div className="duality__center-line" />
          <span className="duality__center-vs">VS</span>
          <div className="duality__center-line" />
        </div>

        <article className="duality__side duality__side--dark">
          <div className="duality__side-glow duality__side-glow--dark" aria-hidden="true" />
          <span className="duality__label duality__label--dark">ENTRANHAS</span>
          <h3 className="duality__side-title">O Pior Lugar</h3>
          <ul className="duality__list">
            <li>
              <span className="duality__bullet duality__bullet--dark">◆</span>
              Uma prisão de luzes coloridas
            </li>
            <li>
              <span className="duality__bullet duality__bullet--dark">◆</span>
              Liberdade = escolher qual corporação possuirá seus órgãos
            </li>
            <li>
              <span className="duality__bullet duality__bullet--dark">◆</span>
              Aluguel do cubículo ou a morte
            </li>
          </ul>
          <div className="duality__static" aria-hidden="true">
            <span>CONTROLE</span>
            <span>SERVIDÃO</span>
            <span>SILÊNCIO</span>
          </div>
        </article>
      </div>
    </section>
  )
}

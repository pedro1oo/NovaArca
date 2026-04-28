import SectionHeader from './SectionHeader'
import './Origin.css'

export default function Origin() {
  return (
    <section id="origin" className="origin">
      <SectionHeader
        number="CAPÍTULO I"
        title="A Cicatriz do Mundo"
        subtitle="Origem"
      />

      <div className="origin__grid">
        <div className="origin__card origin__card--main">
          <div className="origin__card-glow" aria-hidden="true" />
          <p className="origin__year">2023 d.C.</p>
          <h3 className="origin__card-title">O Colapso</h3>
          <p className="origin__text">
            Quando os céus se rasgaram com o fogo da 4ª Grande Guerra, o solo desta região
            foi estilhaçado por ogivas de curto alcance. A infraestrutura global colapsou.
            A eletricidade tornou-se um mito esquecido — forçando a humanidade a uma
            <span className="origin__highlight"> Regressão Medieval</span> por necessidade
            de sobrevivência.
          </p>
        </div>

        <div className="origin__card">
          <div className="origin__card-icon" aria-hidden="true">⬇</div>
          <h3 className="origin__card-title">Construída nas Feridas</h3>
          <p className="origin__text">
            Os detritos e as crateras tornaram-se o alicerce da cidade. As megaconstruções
            não foram erguidas sobre a terra, mas <span className="origin__highlight">dentro
            das feridas abertas pelas bombas</span>.
          </p>
        </div>

        <div className="origin__card">
          <div className="origin__card-icon" aria-hidden="true">↕</div>
          <h3 className="origin__card-title">Abismo e Luxo</h3>
          <p className="origin__text">
            Uma metrópole que cresce para baixo, em direção ao abismo, e para cima,
            em direção ao <span className="origin__highlight">luxo isolado</span>.
          </p>
        </div>
      </div>

      <div className="origin__timeline" aria-hidden="true">
        <div className="origin__timeline-line" />
        <div className="origin__timeline-dot origin__timeline-dot--1" />
        <div className="origin__timeline-dot origin__timeline-dot--2" />
        <div className="origin__timeline-dot origin__timeline-dot--3" />
      </div>
    </section>
  )
}

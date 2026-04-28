import SectionHeader from './SectionHeader'
import './Structure.css'

export default function Structure() {
  return (
    <section id="structure" className="structure">
      <SectionHeader
        number="CAPÍTULO II"
        title="O Eco das Espadas e Chips"
        subtitle="A Estrutura de Domínio"
      />

      <div className="structure__columns">
        <article className="structure__block structure__block--left">
          <div className="structure__block-border" aria-hidden="true" />
          <div className="structure__icon" aria-hidden="true">⚔</div>
          <h3 className="structure__block-title">Campos de Treinamento e Extermínio</h3>
          <p className="structure__text">
            Jovens que não possuem <span className="structure__term">"Créditos de Linhagem"</span> são
            recrutados à força. Se aceitarem lutar as guerras de ego dos Barões, recebem
            implantes de combate rústicos e espadas de tungstênio.
          </p>
          <div className="structure__warning">
            <span className="structure__warning-icon">▲</span>
            <p>
              Se negarem, são enviados aos campos de extermínio — instalações de processamento
              onde a vida humana é descartada ou convertida em <span className="structure__term">biomassa</span> para
              alimentar os geradores da cidade.
            </p>
          </div>
        </article>

        <div className="structure__divider-vertical" aria-hidden="true">
          <div className="structure__divider-pulse" />
        </div>

        <article className="structure__block structure__block--right">
          <div className="structure__block-border" aria-hidden="true" />
          <div className="structure__icon" aria-hidden="true">🏰</div>
          <h3 className="structure__block-title">Bases Corporativas</h3>
          <p className="structure__text">
            Erguidas como <span className="structure__term">castelos de aço escuro</span> e
            luzes de neon escarlate, essas bases vigiam as crateras comerciais através de
            olhos de vidro e sensores de movimento.
          </p>
          <div className="structure__tax">
            <p className="structure__tax-label">DÍZIMO CORPORATIVO</p>
            <p className="structure__text">
              Cobram dízimos pesados de quem tenta vender o que sobrou do mundo antigo.
            </p>
          </div>
        </article>
      </div>

      <div className="structure__footer-line" aria-hidden="true">
        <span>GOVERNO = MEGACORPORAÇÃO</span>
      </div>
    </section>
  )
}

import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__border" aria-hidden="true" />
      <div className="footer__content">
        <div className="footer__logo">
          <span className="footer__symbol">⚔</span>
          <span className="footer__name">NOVA ARCA</span>
        </div>
        <p className="footer__era">Era das Cinzas — Século I pós-Colapso</p>
        <p className="footer__copy">
          Medieval Cyberpunk — Um mundo onde espadas e chips coexistem nas ruínas do amanhã.
        </p>
        <div className="footer__line" aria-hidden="true" />
        <p className="footer__status">
          <span className="footer__dot" aria-hidden="true" />
          TRANSMISSÃO ATIVA — FREQUÊNCIA CLANDESTINA
        </p>
      </div>
    </footer>
  )
}

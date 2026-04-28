import './SectionHeader.css'

interface Props {
  number: string
  title: string
  subtitle: string
}

export default function SectionHeader({ number, title, subtitle }: Props) {
  return (
    <div className="section-header">
      <span className="section-header__number">{number}</span>
      <h2 className="section-header__title">{title}</h2>
      <p className="section-header__subtitle">{subtitle}</p>
      <div className="section-header__line" aria-hidden="true" />
    </div>
  )
}

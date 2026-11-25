import SectionHead from './SectionHead'
import ServiceCard from './ServiceCard'
import { services } from '../data.jsx'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <SectionHead
          eyebrow="Skills"
          title="Services"
          text="Three core plays, run the same way every match: clean setup, sharp execution, honest follow-up."
        />
        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.title} number={String(i + 1).padStart(2, '0')} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

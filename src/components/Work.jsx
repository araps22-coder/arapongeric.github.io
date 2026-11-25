import SectionHead from './SectionHead'
import WorkCard from './WorkCard'
import { works } from '../data.jsx'

export default function Work() {
  return (
    <section className="section alt" id="work">
      <div className="wrap">
        <SectionHead
          eyebrow="Match History"
          title="Recent work"
          text="A short highlight reel — full case studies available on request."
        />
        <div className="work-grid">
          {works.map((w, i) => (
            <WorkCard key={w.title} number={String(i + 1).padStart(2, '0')} {...w} />
          ))}
        </div>
      </div>
    </section>
  )
}

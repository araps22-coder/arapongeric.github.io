import StatCell from './StatCell'
import { aboutStats, skills } from '../data.jsx'

export default function About() {
  return (
    <section className="section alt" id="about">
      <div className="wrap about-grid">
        <div className="about-visual" id="numbers">
          <div className="kda">
            {aboutStats.map((s) => (
              <StatCell key={s.label} variant="cell" {...s} />
            ))}
          </div>
        </div>

        <div className="about-copy">
          <p className="eyebrow">About Me</p>
          <h2>Hi I'm Geric,<br />A STUDENT AT TCGC.</h2>
          <p>
            <strong>3rd Year BSCS</strong> designing and building products for startups and studios.
          </p>
          <p>
            — I bring the same read-react-execute loop from competitive play into every sprint:
            fast iteration, clear calls, no wasted motion.
          </p>
          <div className="taglist" id="skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

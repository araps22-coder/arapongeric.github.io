import StatCell from './StatCell'
import { heroStats, profile } from '../data.jsx'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="hero-copy">
          <p className="eyebrow">Player · Creator · Developer</p>
          <h1>
            WELCOME TO MY<br />
            <span className="accent">PORTFOLIO.</span>
          </h1>
          <p className="hero-tag">— ROLE: FULL-STACK DEV</p>
          <p className="lead">
            I build fast, focused web experiences by day and compete on stage by night.
            Same mindset either way: read the game, make the clean play, ship the win.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-solid">Contact me</a>
            <a href="#work" className="btn btn-outline">See my Work</a>
          </div>

          <div className="hero-stats">
            {heroStats.map((s) => (
              <StatCell key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="player-card">
          <div className="photo-frame">
            <div className="image">
              {/* Your photo lives at public/araps.png */}
              <img
                src={`${import.meta.env.BASE_URL}araps.png`}
                alt={`${profile.name} ${profile.surname}`}
                className="bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

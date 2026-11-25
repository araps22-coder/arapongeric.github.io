import { socials, profile } from '../data.jsx'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© 2026 {profile.name} {profile.surname}. All rights reserved.</span>
        <div className="socials">
          {socials.map((name) => (
            <a key={name} href="#">{name}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

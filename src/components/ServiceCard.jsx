export default function ServiceCard({ number, title, text, icon }) {
  return (
    <div className="service-card">
      <span className="num">{number}</span>
      <div className="service-icon">
        <svg
          width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          {icon}
        </svg>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default function WorkCard({ number, tag, title, text }) {
  return (
    <div className="work-card">
      <div className="work-thumb"><span>{number}</span></div>
      <div className="work-info">
        <span className="tag">{tag}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

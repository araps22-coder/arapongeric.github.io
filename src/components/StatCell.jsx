// Reusable number + label. Use variant="cell" for the boxed style in About.
export default function StatCell({ value, label, variant }) {
  const content = (
    <>
      <b>{value}</b>
      <span>{label}</span>
    </>
  )
  return variant === 'cell' ? <div className="cell">{content}</div> : <div>{content}</div>
}

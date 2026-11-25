// A nav item that opens a small menu. Open/close is controlled by Navbar,
// so only one dropdown is open at a time and it closes on outside click / Escape.
export default function NavDropdown({ label, items, open, onToggle, onSelect }) {
  return (
    <li className={`has-dropdown ${open ? 'open' : ''}`}>
      <button
        type="button"
        className="dropdown-toggle"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={(e) => {
          e.stopPropagation() // don't let the outside-click handler close it right away
          onToggle()
        }}
      >
        {label}
        <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <ul className="dropdown-menu">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} onClick={onSelect}>{item.label}</a>
          </li>
        ))}
      </ul>
    </li>
  )
}

// All the text on the site lives here — edit this file, not the components.

export const profile = {
  name: 'Geric',
  surname: 'Arapon',
  email: 'gericarapon22@gmail.com',
  phone: '+63 (09)97-2374388',
}

// A link with "children" becomes a dropdown menu.
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  {
    label: 'Work',
    children: [
      { id: 'work', label: 'Projects' },
      { id: 'skills', label: 'Skills' },
      { id: 'numbers', label: 'By the Numbers' },
    ],
  },
  { id: 'contact', label: 'Contact' },
]

export const heroStats = [
  { value: '3', label: 'BSCS' },
  { value: '20', label: 'Age' },
  { value: '50%', label: 'Coding' },
]

export const aboutStats = [
  { value: '100', label: 'Projects' },
  { value: '10', label: 'Clients' },
  { value: '1', label: 'Awards' },
  { value: '30%', label: 'Retention' },
  { value: '24h', label: 'Avg. Reply' },
  { value: '3', label: 'Titles Won' },
]

export const skills = ['HTML / CSS', 'JavaScript', 'React', 'UI Systems', 'Team Lead']

export const services = [
  {
    title: 'Web Development',
    text: 'Responsive, fast-loading sites and web apps built clean from the ground up — no bloat, no dead weight.',
    icon: <path d="M8 3L3 12l5 9M16 3l5 9-5 9" />,
  },
  {
    title: 'UI / Brand Systems',
    text: 'Design systems and component libraries that keep every screen consistent as the product grows.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3" />
      </>
    ),
  },
  {
    title: 'Live Support & Coaching',
    text: 'Ongoing maintenance, performance tuning, and 1:1 sessions for teams leveling up their own stack.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l4 2" />
      </>
    ),
  },
]

export const works = [
  { tag: 'Web App', title: 'Team Dashboard', text: 'Stats and scheduling hub for a 6-player roster.' },
  { tag: 'Brand', title: 'Gaming', text: 'Mlbb, Play, and social experiment.' },
  { tag: 'E-commerce', title: 'Merch Store', text: 'Storefront for limited-run team merchandise.' },
]

export const socials = ['Twitch', 'X', 'GitHub', 'LinkedIn']

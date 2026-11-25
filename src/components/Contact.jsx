import { useState } from 'react'
import { profile } from '../data.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Opens the visitor's email app with the message filled in
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="contact-box">
          <div className="contact-info">
            <p className="eyebrow" style={{ color: '#17121B', opacity: 0.7 }}>Get In Touch</p>
            <h2>Let's play<br />on the same team.</h2>
            <p>Have a project in mind? Send the brief over and I'll reply within a day.</p>
            <ul>
              <li>{profile.email}</li>
              <li>{profile.phone}</li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name"
                value={form.name} onChange={handleChange} required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@email.com"
                value={form.email} onChange={handleChange} required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about the project"
                value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-solid" style={{ alignSelf: 'flex-start' }}>
              Send Message
            </button>
            {sent && <p className="form-note">Opening your email app…</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

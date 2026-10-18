import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { profile } from '../data/portfolio'

export function Contact() {
  const [messageLength, setMessageLength] = useState(0)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '')
    const email = String(form.get('email') ?? '')
    const subject = String(form.get('subject') ?? 'Portfolio conversation')
    const message = String(form.get('message') ?? '')
    const body = `Hi Deependra,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <section className="inner-hero inner-hero--contact">
        <div className="shell contact-hero-grid">
          <div>
            <span className="eyebrow">Start a conversation</span>
            <h1>Good systems begin with a <em>clear problem.</em></h1>
            <p>
              If you&apos;re hiring for senior software engineering, solving a difficult performance
              problem, or building a data-heavy enterprise product, I&apos;d be glad to talk.
            </p>
          </div>
          <div className="contact-orbit" aria-hidden="true">
            <div><Send size={42} strokeWidth={1.15} /></div>
            <span /><span /><span />
          </div>
        </div>
      </section>

      <section className="section section--light contact-section">
        <div className="shell contact-grid">
          <div className="contact-sidebar">
            <div>
              <span className="eyebrow">Direct channels</span>
              <h2>Reach me where <em>you work best.</em></h2>
              <p>I&apos;m based in Delhi NCR and open to thoughtful conversations with teams worldwide.</p>
            </div>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>
                <span><Mail size={20} /></span>
                <div><small>Email</small><strong>{profile.email}</strong></div>
                <ArrowUpRight size={17} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <span><Linkedin size={20} /></span>
                <div><small>LinkedIn</small><strong>Professional profile</strong></div>
                <ArrowUpRight size={17} />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <span><Github size={20} /></span>
                <div><small>GitHub</small><strong>Code and experiments</strong></div>
                <ArrowUpRight size={17} />
              </a>
              <div className="contact-location">
                <span><MapPin size={20} /></span>
                <div><small>Location</small><strong>{profile.location}</strong></div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <span className="eyebrow">Message</span>
              <h2>What are you working on?</h2>
              <p>This form opens your email client with the message prepared.</p>
            </div>
            <div className="form-row">
              <label>
                <span>Full name</span>
                <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
              </label>
              <label>
                <span>Email address</span>
                <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
              </label>
            </div>
            <label>
              <span>Subject</span>
              <select name="subject" defaultValue="Engineering opportunity">
                <option>Engineering opportunity</option>
                <option>Architecture or performance discussion</option>
                <option>Project collaboration</option>
                <option>General conversation</option>
              </select>
            </label>
            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows={7}
                maxLength={1000}
                placeholder="Share the role, challenge, or idea you would like to discuss."
                onChange={(event) => setMessageLength(event.target.value.length)}
                required
              />
              <small className="character-count">{messageLength}/1000</small>
            </label>
            <button className="button button--dark contact-submit" type="submit">
              Prepare email <Send size={17} />
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

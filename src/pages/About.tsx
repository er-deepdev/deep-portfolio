import { ArrowRight, BrainCircuit, GraduationCap, Target, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionIntro } from '../components/SectionIntro'
import { focusAreas } from '../data/portfolio'

const principles = [
  {
    icon: BrainCircuit,
    title: 'Understand before optimizing',
    text: 'I map the data path, workload, and failure modes before choosing the fix.',
  },
  {
    icon: Target,
    title: 'Measure the outcome',
    text: 'Performance work should produce evidence: lower latency, faster processing, or simpler operations.',
  },
  {
    icon: UsersRound,
    title: 'Design for the team',
    text: 'Clear boundaries, readable code, and useful documentation make systems easier to evolve.',
  },
]

export function About() {
  return (
    <>
      <section className="inner-hero inner-hero--about">
        <div className="shell inner-hero-grid">
          <div>
            <span className="eyebrow">About the engineer</span>
            <h1>Curious by nature.<br /><em>Practical by design.</em></h1>
            <p>
              I build software for domains where correctness, scale, and business context matter.
              My work spans architecture, backend engineering, data, search, user interfaces, and
              production delivery.
            </p>
            <Link className="button button--primary" to="/journey">
              Follow my journey <ArrowRight size={17} />
            </Link>
          </div>
          <div className="about-system" aria-label="Four parts of Deependra's engineering approach">
            <div className="about-system__core">DS</div>
            <span className="about-system__orbit about-system__orbit--one" />
            <span className="about-system__orbit about-system__orbit--two" />
            <div className="about-system__node about-system__node--one">Think in systems</div>
            <div className="about-system__node about-system__node--two">Measure impact</div>
            <div className="about-system__node about-system__node--three">Own delivery</div>
            <div className="about-system__node about-system__node--four">Keep learning</div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="shell about-story-grid">
          <div>
            <span className="eyebrow">My story</span>
            <h2>From software fundamentals to <em>enterprise systems</em></h2>
          </div>
          <div className="prose-stack">
            <p className="prose-lead">
              My path began with a Computer Science foundation and a fascination with how software
              turns rules, data, and people into a working system.
            </p>
            <p>
              That curiosity became practical experience across AML and compliance platforms,
              high-volume screening, supply-chain planning, reporting, and customer-experience
              products. Each environment taught me to look beyond a single service or screen and
              understand the complete operating context.
            </p>
            <p>
              Today, I am strongest when a problem crosses boundaries: requirements into design,
              application logic into data performance, and implementation into dependable releases.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell">
          <SectionIntro
            eyebrow="How I work"
            title={<>A reliable process for <em>ambiguous problems</em></>}
            copy="Good engineering is as much about framing the problem as writing the code."
            align="split"
          />
          <div className="principles-grid">
            {principles.map(({ icon: Icon, title, text }, index) => (
              <article className="principle-card" key={title}>
                <span className="principle-card__number">0{index + 1}</span>
                <Icon size={28} strokeWidth={1.35} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell">
          <SectionIntro
            eyebrow="Current focus"
            title={<>Building for the <em>whole lifecycle</em></>}
            copy="The areas where I create the most leverage in an engineering team."
            align="split"
          />
          <div className="focus-list">
            {focusAreas.map((area) => (
              <article key={area.title}>
                <span>{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="shell education-card">
          <div className="education-icon"><GraduationCap size={34} strokeWidth={1.4} /></div>
          <div>
            <span className="eyebrow">Education</span>
            <h2>Bachelor of Technology in Computer Science and Engineering</h2>
            <p>Accurate Institute of Management and Technology, Greater Noida</p>
          </div>
          <strong>July 2019 – July 2023</strong>
        </div>
      </section>
    </>
  )
}

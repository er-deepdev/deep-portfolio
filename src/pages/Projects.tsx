import { ArrowRight, DraftingCompass, Gauge, ScanSearch } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CaseStudyDialog } from '../components/CaseStudyDialog'
import { SectionIntro } from '../components/SectionIntro'
import { projects } from '../data/portfolio'

const process = [
  { icon: ScanSearch, title: 'Frame the real constraint', text: 'Trace the workflow, data shape, failure modes, and success signal.' },
  { icon: DraftingCompass, title: 'Design the right boundary', text: 'Choose structures, services, and interfaces that keep change manageable.' },
  { icon: Gauge, title: 'Prove the improvement', text: 'Test with realistic workloads and verify the outcome with measurable evidence.' },
]

export function Projects() {
  return (
    <>
      <section className="inner-hero inner-hero--projects">
        <div className="shell project-hero-grid">
          <div>
            <span className="eyebrow">Selected work</span>
            <h1>Systems shaped by<br /><em>real constraints.</em></h1>
            <p>
              Four anonymized case studies from enterprise work in data architecture, automation,
              search, and compliance. Each one begins with the problem and ends with an outcome.
            </p>
            <Link className="button button--primary" to="/contact">
              Discuss a similar challenge <ArrowRight size={17} />
            </Link>
          </div>
          <div className="project-hero-art" aria-hidden="true">
            <span className="project-hero-cube project-hero-cube--one" />
            <span className="project-hero-cube project-hero-cube--two" />
            <span className="project-hero-cube project-hero-cube--three" />
            <span className="project-hero-track project-hero-track--one" />
            <span className="project-hero-track project-hero-track--two" />
            <strong>01 → 04</strong>
          </div>
        </div>
      </section>

      <section className="section section--ink section--projects">
        <div className="shell">
          <SectionIntro
            eyebrow="Case study index"
            title={<>Problem → system → <em>impact</em></>}
            copy="Open any case study for the challenge, engineering approach, outcome, and technology profile."
            align="split"
          />
          <div className="projects-grid">
            {projects.map((project) => <CaseStudyDialog key={project.id} project={project} />)}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="shell">
          <SectionIntro
            eyebrow="Engineering method"
            title={<>A simple loop for <em>difficult systems</em></>}
            copy="The tools change. The problem-solving loop stays disciplined."
            align="split"
          />
          <div className="process-grid">
            {process.map(({ icon: Icon, title, text }, index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <Icon size={30} strokeWidth={1.35} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

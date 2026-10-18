import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Database,
  Download,
  Layers3,
  Workflow,
} from 'lucide-react'
import { motion } from 'motion/react'
import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { CaseStudyDialog } from '../components/CaseStudyDialog'
import { SectionIntro } from '../components/SectionIntro'
import { focusAreas, metrics, profile, projects } from '../data/portfolio'

const focusIcons = [Layers3, Database, Workflow, Braces]
const OrbitalSystem = lazy(() =>
  import('../components/OrbitalSystem').then((module) => ({ default: module.OrbitalSystem })),
)

export function Overview() {
  return (
    <>
      <section className="hero-section hero-section--overview">
        <div className="hero-grid shell">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">Build · optimize · scale · impact</span>
            <h1 className="hero-identity">
              <span>Deependra Singh</span>
              <strong>Senior Software Engineer</strong>
            </h1>
            <p className="hero-statement">
              Engineering systems that <em>hold up</em> under pressure.
            </p>
            <p className="hero-lead">
              I build scalable enterprise applications across supply chain, fintech, AML,
              compliance, and customer experience—turning complex business requirements into
              reliable, high-impact software.
            </p>
            <div className="hero-actions">
              <Link className="button button--primary" to="/projects">
                Explore the work <ArrowRight size={17} />
              </Link>
              <a className="button button--ghost" href={profile.resume} download>
                Download résumé <Download size={17} />
              </a>
            </div>
            <div className="hero-stack" aria-label="Core technologies">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Microservices</span>
              <span>SQL</span>
              <span>React</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-art"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Suspense fallback={<div className="orbital-loader" aria-hidden="true"><span /></div>}>
              <OrbitalSystem />
            </Suspense>
            <div className="hero-portrait">
              <span className="hero-portrait__halo" aria-hidden="true" />
              <img
                src="/deependra-singh-profile.png"
                alt="Deependra Singh, Senior Software Engineer"
              />
            </div>
            <div className="hero-art-caption">
              <span>System signal</span>
              <strong>Architecture → Data → Delivery → Impact</strong>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="metric-band" aria-label="Selected engineering outcomes">
        <div className="shell metric-grid">
          {metrics.map((metric, index) => (
            <div className="metric" key={metric.label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{metric.value}</strong>
              <div>
                <b>{metric.label}</b>
                <small>{metric.detail}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--light">
        <div className="shell">
          <SectionIntro
            eyebrow="The engineering brief"
            title={<>From complex requirements to <em>reliable outcomes</em></>}
            copy="I work where system design, high-volume data, business rules, and production realities meet. The goal is not novelty; it is software that stays understandable, fast, and useful."
            align="split"
          />
          <div className="focus-grid">
            {focusAreas.map((area, index) => {
              const Icon = focusIcons[index]
              return (
                <article className="focus-card" key={area.title}>
                  <div className="focus-card__head">
                    <Icon size={23} strokeWidth={1.5} />
                    <span>{area.number}</span>
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell">
          <SectionIntro
            eyebrow="Selected case studies"
            title={<>Real systems. <em>Measured improvements.</em></>}
            copy="A compact view of the architecture, performance, and workflow problems I have delivered in enterprise environments."
            align="split"
          />
          <div className="projects-grid projects-grid--featured">
            {projects.slice(0, 3).map((project) => (
              <CaseStudyDialog key={project.id} project={project} />
            ))}
          </div>
          <div className="section-action">
            <Link className="text-link" to="/projects">
              View all case studies <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="shell closing-grid">
          <div>
            <span className="eyebrow">What I bring</span>
            <h2>Back-end depth.<br />Full-stack range.<br /><em>Production ownership.</em></h2>
          </div>
          <div className="closing-copy">
            <p>
              I can move from requirements and low-level design to APIs, data models, interfaces,
              deployments, observability, and root-cause analysis. That end-to-end context helps me
              make technical choices that survive real operating conditions.
            </p>
            <Link className="button button--dark" to="/experience">
              See the experience <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

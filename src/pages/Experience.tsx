import { ArrowUpRight, BriefcaseBusiness, Check, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionIntro } from '../components/SectionIntro'
import { experiences, metrics } from '../data/portfolio'

export function Experience() {
  return (
    <>
      <section className="inner-hero inner-hero--experience">
        <div className="shell experience-hero-grid">
          <div>
            <span className="eyebrow">Professional experience</span>
            <h1>Complex domains.<br /><em>Clear engineering.</em></h1>
            <p>
              Experience across supply-chain planning, AML, compliance, AI integration, and
              customer-experience platforms—backed by measurable improvements in speed and scale.
            </p>
          </div>
          <div className="experience-signal">
            <span><BriefcaseBusiness size={21} /> 2 enterprise roles</span>
            <strong>Back end</strong>
            <strong>Data</strong>
            <strong>Front end</strong>
            <strong>Delivery</strong>
          </div>
        </div>
      </section>

      <section className="metric-band metric-band--compact">
        <div className="shell metric-grid">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <div><b>{metric.label}</b><small>{metric.detail}</small></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--light">
        <div className="shell">
          <SectionIntro
            eyebrow="Work history"
            title={<>Ownership across the <em>full system</em></>}
            copy="A closer look at the responsibilities, outcomes, and technologies behind each role."
            align="split"
          />

          <div className="experience-list">
            {experiences.map((experience, index) => (
              <article className="experience-card" key={experience.company}>
                <div className="experience-card__rail">
                  <span>0{index + 1}</span>
                  <i />
                </div>
                <div className="experience-card__main">
                  <div className="experience-card__head">
                    <div>
                      <div className="experience-company-line">
                        <h2>{experience.company}</h2>
                        {experience.current ? <span className="current-pill">Current</span> : null}
                      </div>
                      <h3>{experience.role}</h3>
                    </div>
                    <div className="experience-meta">
                      <strong>{experience.period}</strong>
                      <span><MapPin size={14} /> {experience.location}</span>
                    </div>
                  </div>
                  <p className="experience-summary">{experience.summary}</p>
                  <div className="experience-card__body">
                    <ul className="achievement-list">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight}><Check size={16} /> <span>{highlight}</span></li>
                      ))}
                    </ul>
                    <aside>
                      <span>Technology profile</span>
                      <ul className="tag-list tag-list--stacked">
                        {experience.stack.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </aside>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell experience-cta">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2>See the problems behind the <em>performance gains</em></h2>
          </div>
          <Link className="button button--dark" to="/projects">
            Explore case studies <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  )
}

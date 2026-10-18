import { ArrowRight, Blocks, CloudCog, Code2, Database, GitBranch, LineChart, ServerCog } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionIntro } from '../components/SectionIntro'
import { skillGroups } from '../data/portfolio'

const skillIcons = [Code2, ServerCog, Blocks, Database, GitBranch, CloudCog, LineChart]

export function Skills() {
  return (
    <>
      <section className="inner-hero inner-hero--skills">
        <div className="shell skills-hero-grid">
          <div>
            <span className="eyebrow">Technical capabilities</span>
            <h1>A broad toolkit.<br /><em>One systems mindset.</em></h1>
            <p>
              Languages, frameworks, databases, messaging, cloud, and reporting tools used to move
              from design to dependable enterprise delivery.
            </p>
          </div>
          <div className="skills-constellation" aria-hidden="true">
            <div className="skills-constellation__core"><Code2 size={42} /></div>
            <span className="skills-dot skills-dot--one" />
            <span className="skills-dot skills-dot--two" />
            <span className="skills-dot skills-dot--three" />
            <span className="skills-dot skills-dot--four" />
            <i className="skills-ring skills-ring--one" />
            <i className="skills-ring skills-ring--two" />
          </div>
        </div>
      </section>

      <section className="section section--light section--skills">
        <div className="shell">
          <SectionIntro
            eyebrow="Skills matrix"
            title={<>Technology in service of <em>the problem</em></>}
            copy="Grouped by how the tools contribute to a production system—not by logo count."
            align="split"
          />
          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = skillIcons[index]
              return (
                <article className="skill-group" key={group.title}>
                  <div className="skill-group__head">
                    <span>{group.index}</span>
                    <Icon size={25} strokeWidth={1.35} />
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul>
                    {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell stack-story">
          <div>
            <span className="eyebrow">How the stack connects</span>
            <h2>From request to response,<br /><em>without losing the context.</em></h2>
          </div>
          <div className="stack-flow" aria-label="Typical full-stack delivery flow">
            {['Requirements', 'Service design', 'Data and search', 'Interface', 'Delivery and support'].map((step, index) => (
              <div key={step}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
                {index < 4 ? <ArrowRight size={16} /> : null}
              </div>
            ))}
          </div>
          <Link className="button button--primary" to="/experience">
            See the stack in practice <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  )
}

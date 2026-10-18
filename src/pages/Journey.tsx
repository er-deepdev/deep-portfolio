import { ArrowRight, Flag, Lightbulb, Mountain, Route, Target, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionIntro } from '../components/SectionIntro'
import { journey } from '../data/portfolio'

export function Journey() {
  return (
    <>
      <section className="inner-hero inner-hero--journey">
        <div className="shell journey-hero-grid">
          <div>
            <span className="eyebrow">Engineering journey</span>
            <h1>Learn the terrain.<br /><em>Build the route.</em></h1>
            <p>
              A progression from core software foundations to regulated platforms, high-volume
              processing, and end-to-end ownership of enterprise systems.
            </p>
          </div>
          <div className="route-map" aria-hidden="true">
            <span className="route-map__path" />
            <div className="route-stop route-stop--one"><span>Learn</span></div>
            <div className="route-stop route-stop--two"><span>Build</span></div>
            <div className="route-stop route-stop--three"><span>Scale</span></div>
            <div className="route-stop route-stop--four"><Flag size={18} /><span>Lead</span></div>
            <Mountain className="route-mountain" size={180} strokeWidth={0.6} />
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="shell">
          <SectionIntro
            eyebrow="The timeline"
            title={<>A journey of <em>continuous growth</em></>}
            copy="A fuller view of the experience, challenges, work, and learning behind the résumé—from first principles to production ownership."
            align="split"
          />

          <div className="journey-list">
            {journey.map((item, index) => (
              <article className="journey-item" key={item.number}>
                <div className="journey-rail">
                  <span>{item.number}</span>
                  {index < journey.length - 1 ? <i /> : null}
                </div>
                <div className="journey-period">{item.period}</div>
                <div className="journey-content">
                  <div className="journey-content__heading">
                    <h3>{item.title}</h3>
                    <span>{item.type}</span>
                  </div>
                  <p>{item.description}</p>
                  <div className="journey-details">
                    <div>
                      <Target size={17} aria-hidden="true" />
                      <span>Challenge</span>
                      <p>{item.challenge}</p>
                    </div>
                    <div>
                      <Wrench size={17} aria-hidden="true" />
                      <span>Work</span>
                      <p>{item.work}</p>
                    </div>
                    <div>
                      <Lightbulb size={17} aria-hidden="true" />
                      <span>Learning</span>
                      <p>{item.learning}</p>
                    </div>
                  </div>
                  <div className="journey-tags">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <blockquote>{item.signal}</blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell journey-next">
          <div className="journey-next__icon"><Route size={34} strokeWidth={1.3} /></div>
          <div>
            <span className="eyebrow">Where this is heading</span>
            <h2>More architecture ownership.<br /><em>More product context.</em></h2>
          </div>
          <div>
            <p>
              I&apos;m continuing to deepen my system-design practice while staying close to delivery—
              the place where architecture meets real users, real data, and real constraints.
            </p>
            <Link className="button button--primary" to="/contact">
              Start a conversation <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

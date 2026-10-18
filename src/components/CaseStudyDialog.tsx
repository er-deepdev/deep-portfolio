import * as Dialog from '@radix-ui/react-dialog'
import { ArrowUpRight, Database, Search, ShieldCheck, Workflow, X } from 'lucide-react'
import { motion } from 'motion/react'
import type { Project } from '../data/portfolio'

const iconMap = {
  archive: Database,
  search: Search,
  automation: Workflow,
  compliance: ShieldCheck,
}

export function CaseStudyDialog({ project }: { project: Project }) {
  const Icon = iconMap[project.accent]

  return (
    <Dialog.Root>
      <article className={`project-card project-card--${project.accent}`}>
        <div className="project-card__topline">
          <span>{project.index}</span>
          <span>{project.category}</span>
        </div>
        <div className="project-visual" aria-hidden="true">
          <Icon size={46} strokeWidth={1.25} />
          <span className="project-visual__ring" />
          <span className="project-visual__line" />
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-metric">
          <strong>{project.metric}</strong>
          <span>{project.metricLabel}</span>
        </div>
        <ul className="tag-list" aria-label="Technologies used">
          {project.stack.slice(0, 4).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Dialog.Trigger asChild>
          <button className="project-open">
            Read case study <ArrowUpRight size={16} />
          </button>
        </Dialog.Trigger>
      </article>

      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content asChild>
          <motion.div
            className="dialog-content"
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Dialog.Close asChild>
              <button className="icon-button dialog-close" aria-label="Close case study">
                <X size={19} />
              </button>
            </Dialog.Close>
            <span className="eyebrow">Case study · {project.index}</span>
            <Dialog.Title>{project.title}</Dialog.Title>
            <Dialog.Description>{project.summary}</Dialog.Description>

            <div className="dialog-metric">
              <strong>{project.metric}</strong>
              <span>{project.metricLabel}</span>
            </div>

            <div className="dialog-story">
              <section>
                <span>Challenge</span>
                <p>{project.challenge}</p>
              </section>
              <section>
                <span>Approach</span>
                <p>{project.approach}</p>
              </section>
              <section>
                <span>Outcome</span>
                <p>{project.outcome}</p>
              </section>
            </div>

            <ul className="tag-list tag-list--dialog" aria-label="Technologies used">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="dialog-note">
              This case study summarizes delivered enterprise work without exposing client-confidential code or data.
            </p>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

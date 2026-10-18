import * as Dialog from '@radix-ui/react-dialog'
import {
  ArrowUpRight,
  Download,
  Mail,
  Menu,
  X,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import {
  Link,
  NavLink,
  useLocation,
  useOutlet,
} from 'react-router-dom'
import { navItems, profile } from '../data/portfolio'

const navClass = ({ isActive }: { isActive: boolean }) =>
  `nav-link${isActive ? ' nav-link--active' : ''}`

function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="icon-button mobile-menu-trigger" aria-label="Open navigation">
          <Menu size={20} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="mobile-nav-overlay" />
        <Dialog.Content className="mobile-nav-panel">
          <Dialog.Title className="sr-only">Portfolio navigation</Dialog.Title>
          <div className="mobile-nav-head">
            <span className="mobile-nav-kicker">Navigate</span>
            <Dialog.Close asChild>
              <button className="icon-button" aria-label="Close navigation">
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <Dialog.Close asChild key={item.to}>
                <NavLink to={item.to} className={navClass}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item.label}
                </NavLink>
              </Dialog.Close>
            ))}
          </nav>
          <div className="mobile-nav-actions">
            <a className="button button--primary" href={`mailto:${profile.email}`}>
              Start a conversation <Mail size={17} />
            </a>
            <a className="button button--ghost" href={profile.resume} download>
              Résumé <Download size={17} />
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export function Layout() {
  const location = useLocation()
  const outlet = useOutlet()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner shell">
          <Link className="brand" to="/" aria-label="Deependra Singh overview">
            <span className="brand-mark">DS</span>
            <span className="brand-copy">
              <strong>Deependra Singh</strong>
              <small>Systems · Software · Scale</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink className={navClass} key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-resume" href={profile.resume} download>
              Résumé <Download size={15} />
            </a>
            <Link className="button button--primary header-cta" to="/contact">
              Let&apos;s talk <ArrowUpRight size={17} />
            </Link>
            <MobileNavigation />
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          {outlet}
        </motion.main>
      </AnimatePresence>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <span className="brand-mark brand-mark--footer">DS</span>
            <p>Senior Software Engineer building reliable systems for complex domains.</p>
          </div>
          <div className="footer-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={14} />
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
          <p className="footer-meta">© 2026 Deependra Singh</p>
        </div>
      </footer>
    </div>
  )
}

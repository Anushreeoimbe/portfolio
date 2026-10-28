
import { useState } from 'react'
import './App.css'
import {
  ArrowDown,
  ArrowRight,
  Mail,
  Menu,
  X,
  Code2,
  Database,
  Globe,
  Layers,
  ExternalLink,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'

const skills = [
  {
    title: 'Frontend Development',
    icon: Globe,
    items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    icon: Code2,
    items: ['Python', 'Django', 'REST APIs', 'Authentication'],
  },
  {
    title: 'Database & Tools',
    icon: Database,
    items: ['SQL', 'MySQL', 'Git', 'GitHub', 'Postman'],
  },
  {
    title: 'Development',
    icon: Layers,
    items: ['Responsive UI', 'CRUD Operations', 'API Integration', 'Debugging'],
  },
]

const projects = [
  {
    name: 'Voylla Jewellery',
    type: 'E-commerce Website',
    description:
      'A jewellery shopping experience with product categories, collection pages, and responsive navigation.',
    tech: ['React', 'JavaScript', 'CSS'],
    icon: '✧',
    color: '#f0c98b',
  },
  {
    name: 'PeoplePulse HR',
    type: 'HR Management Dashboard',
    description:
      'An HR dashboard interface designed to organize employee information and simplify everyday HR workflows.',
    tech: ['React', 'Vite', 'CSS'],
    icon: '◈',
    color: '#91e4d0',
  },
  {
    name: 'TravelKar',
    type: 'Travel Website',
    description:
      'A travel-focused web experience with organized pages and a responsive user interface.',
    tech: ['React', 'Vite', 'JavaScript'],
    icon: '✈',
    color: '#9db9ff',
  },
  {
    name: 'Rentable',
    type: 'Car Rental Dashboard',
    description:
      'A car rental dashboard featuring vehicle statistics, booking information, and fleet management UI.',
    tech: ['React', 'Recharts', 'CSS'],
    icon: '◇',
    color: '#e1ed75',
  },
  {
    name: 'Authentication Dashboard',
    type: 'Authentication & User Access',
    description:
      'A multi-page authentication interface with login, registration, protected routes, and account pages.',
    tech: ['React', 'React Router', 'JavaScript'],
    icon: '⌘',
    color: '#c5a9ff',
  },
  {
    name: 'SaaS Management',
    type: 'Admin Dashboard',
    description:
      'A SaaS management dashboard project focused on clear layouts, metrics, and reusable UI components.',
    tech: ['React', 'Vite', 'CSS'],
    icon: '▦',
    color: '#ffadad',
  },
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Anushreeoimbe',
    icon: Code2,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: BriefcaseBusiness,
  },
  {
    label: 'Email',
    href: 'mailto:anushreeoimbe@gmail.com',
    icon: Mail,
  },
]

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [notice, setNotice] = useState('')

  const navItems = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
  ]

  function handleSubmit(event) {
    event.preventDefault()

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name}`,
    )

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )

    setNotice('Opening your email application to send the message…')

    window.location.href =
      `mailto:anushreeoimbe@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Go to home">
          <span className="brand-mark">A.</span>
          <span>
            ANUSHREE<span className="brand-dot">.</span>
          </span>
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            className="nav-cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Let's Talk <ArrowRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              FULL STACK DEVELOPER
            </div>

            <p className="hero-intro">Hello, I'm Anushree Oimbe</p>

            <h1>
              Building digital
              <br />
              experiences that
              <br />
              <span className="gradient-text">make an impact.</span>
            </h1>

            <p className="hero-description">
              I build modern, responsive web applications using React,
              Python and Django — turning ideas into clean, functional
              digital experiences.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                Explore My Work <ArrowRight size={17} />
              </a>

              <a className="button-secondary" href="#contact">
                Get In Touch <Mail size={16} />
              </a>
            </div>

            <div className="social-links">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  <Icon size={19} />
                </a>
              ))}

              <span className="social-caption">Let's connect</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="profile-card">
              <div className="profile-top">
                <span className="profile-window">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="profile-label">
                  DEVELOPER.PORTFOLIO
                </span>
              </div>

              <div className="code-content">
                <span className="code-muted">// A little about me</span>

                <p>
                  <span className="code-purple">const</span> developer = {'{'}
                </p>
                <p className="indent">
                  <span className="code-blue">name</span>:{' '}
                  <span className="code-green">'Anushree'</span>,
                </p>
                <p className="indent">
                  <span className="code-blue">role</span>:{' '}
                  <span className="code-green">'Full Stack Dev'</span>,
                </p>
                <p className="indent">
                  <span className="code-blue">frontend</span>:{' '}
                  <span className="code-green">'React.js'</span>,
                </p>
                <p className="indent">
                  <span className="code-blue">backend</span>:{' '}
                  <span className="code-green">'Python / Django'</span>,
                </p>
                <p className="indent">
                  <span className="code-blue">passion</span>:{' '}
                  <span className="code-green">'Building things'</span>
                </p>
                <p>{'}'}</p>

                <div className="code-divider" />

                <div className="code-status">
                  <span className="status-dot" />
                  Ready to create something great
                  <span className="cursor">_</span>
                </div>
              </div>
            </div>

            <div className="floating-card floating-tech">
              <Code2 size={20} />
              <span>
                <strong>Clean Code</strong>
                <small>Built with purpose</small>
              </span>
            </div>

            <div className="floating-card floating-stack">
              <Sparkles size={20} />
              <span>
                <strong>Modern Stack</strong>
                <small>React · Python · SQL</small>
              </span>
            </div>

            <div className="hero-decoration">✳</div>
          </div>

          <a href="#about" className="scroll-cue">
            <span className="scroll-line" />
            SCROLL TO EXPLORE
            <ArrowDown size={14} />
          </a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <SectionTitle
            eyebrow="01 / ABOUT ME"
            title={
              <>
                A developer who loves
                <br />
                <span className="gradient-text">solving problems.</span>
              </>
            }
            description="A little about my journey, what I do, and what drives me."
          />

          <div className="about-grid">
            <div className="about-main glass-card">
              <div className="about-icon">
                <BriefcaseBusiness size={25} />
              </div>

              <h3>From ideas to applications.</h3>

              <p>
                I'm a Computer Science Engineering graduate passionate about
                creating useful, intuitive web experiences. I enjoy working
                across the frontend and backend, building responsive
                interfaces and connecting them to reliable application logic.
              </p>

              <p>
                I currently work as a Full Stack Developer at Stackly,
                contributing to a Financial Services & FinTech project.
                I'm continuously learning, improving my skills, and exploring
                better ways to build software.
              </p>

              <div className="about-tags">
                <span>
                  <CheckCircle2 size={14} /> Detail-oriented
                </span>
                <span>
                  <CheckCircle2 size={14} /> Curious learner
                </span>
                <span>
                  <CheckCircle2 size={14} /> Team-focused
                </span>
              </div>
            </div>

            <div className="about-side">
              <div className="glass-card info-card">
                <GraduationCap size={23} className="accent-icon" />
                <div>
                  <span className="info-label">EDUCATION</span>
                  <h3>B.E. Computer Science</h3>
                  <p>PRMCEAM · 2020–2024</p>
                  <p>CGPA: 8.55 / 10</p>
                </div>
              </div>

              <div className="glass-card info-card">
                <BriefcaseBusiness size={23} className="accent-icon" />
                <div>
                  <span className="info-label">CURRENT ROLE</span>
                  <h3>Full Stack Developer</h3>
                  <p>Stackly · Financial Services & FinTech</p>
                </div>
              </div>

              <div className="glass-card info-card">
                <MapPin size={23} className="accent-icon" />
                <div>
                  <span className="info-label">MY FOCUS</span>
                  <h3>Web Development</h3>
                  <p>Responsive UI · APIs · Database-driven apps</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <SectionTitle
            eyebrow="02 / MY TOOLKIT"
            title={
              <>
                Skills that bring ideas
                <br />
                <span className="gradient-text">to life.</span>
              </>
            }
            description="The technologies and tools I use to build meaningful web applications."
          />

          <div className="skills-grid">
            {skills.map(({ title, icon: Icon, items }, index) => (
              <article
                className="skill-card glass-card"
                key={title}
                style={{ '--delay': `${index * 100}ms` }}
              >
                <div className="skill-icon">
                  <Icon size={23} />
                </div>

                <h3>{title}</h3>

                <div className="skill-tags">
                  {items.map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="skills-note">
            <Sparkles size={17} />
            Always learning. Always building. Always improving.
          </div>
        </section>

        <section
          className="projects section-wrap section-block"
          id="projects"
        >
          <SectionTitle
            eyebrow="03 / SELECTED WORK"
            title={
              <>
                Things I've <span className="gradient-text">built.</span>
              </>
            }
            description="A selection of personal projects and frontend experiences I've worked on."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card glass-card" key={project.name}>
                <div
                  className="project-preview"
                  style={{ '--project-color': project.color }}
                >
                  <span className="project-symbol">{project.icon}</span>
                  <span className="project-index">0{index + 1} / 06</span>

                  <div className="preview-lines">
                    <i />
                    <i />
                    <i />
                  </div>

                  <span className="preview-chip">{project.type}</span>
                </div>

                <div className="project-content">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tech.map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <span>
                      <span className="status-dot" />
                      Personal project
                    </span>
                    <span
                      className="project-arrow"
                      aria-label={`${project.name} project`}
                    >
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="projects-note">
            Want to explore my code? Visit my{' '}
            <a
              href="https://github.com/Anushreeoimbe"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile <ExternalLink size={13} />
            </a>
            .
          </p>
        </section>

        <section
          className="contact section-wrap section-block"
          id="contact"
        >
          <SectionTitle
            eyebrow="04 / GET IN TOUCH"
            title={
              <>
                Let's build something
                <br />
                <span className="gradient-text">great together.</span>
              </>
            }
            description="Have an opportunity, an idea, or just want to say hello? I'd love to hear from you."
          />

          <div className="contact-grid">
            <div className="contact-copy">
              <h3>Let's start a conversation.</h3>

              <p>
                I'm interested in web development opportunities, creative
                projects, and connecting with people who love building
                great products.
              </p>

              <a
                className="contact-method"
                href="mailto:anushreeoimbe@gmail.com"
              >
                <span className="contact-method-icon">
                  <Mail size={20} />
                </span>
                <span>
                  <small>EMAIL ME AT</small>
                  <strong>anushreeoimbe@gmail.com</strong>
                </span>
                <ArrowRight size={17} />
              </a>

              <a
                className="contact-method"
                href="https://github.com/Anushreeoimbe"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-method-icon">
                  <Code2 size={20} />
                </span>
                <span>
                  <small>FIND ME ON</small>
                  <strong>GitHub · Anushreeoimbe</strong>
                </span>
                <ExternalLink size={16} />
              </a>
            </div>

            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <h3>
                Send me a message <span>✳</span>
              </h3>

              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                placeholder="What should I call you?"
                value={form.name}
                onChange={event =>
                  setForm({ ...form, name: event.target.value })
                }
              />

              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={event =>
                  setForm({ ...form, email: event.target.value })
                }
              />

              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                placeholder="Tell me what's on your mind..."
                value={form.message}
                onChange={event =>
                  setForm({ ...form, message: event.target.value })
                }
              />

              <button className="button-primary submit-button" type="submit">
                Send Message <Send size={16} />
              </button>

              {notice && (
                <p className="form-notice" role="status">
                  {notice}
                </p>
              )}

              <p className="form-hint">
                Your email application will open with your message ready to send.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">A.</span>
          <span>
            ANUSHREE<span className="brand-dot">.</span>
          </span>
        </a>

        <p>
          Designed & built with <span className="heart">♥</span> and React.
        </p>

        <a href="#home" className="back-top">
          Back to top ↑
        </a>

        <span className="copyright">
          © {new Date().getFullYear()} Anushree Oimbe
        </span>
      </footer>
    </div>
  )
}

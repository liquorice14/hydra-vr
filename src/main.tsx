import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  PhoneCall,
  Send,
  Twitter,
  X,
  Youtube,
} from 'lucide-react'
import './styles.css'

import logo from './assets/hydra/logo.svg'
import heroImage from './assets/hydra/hero.jpg'
import aboutImage from './assets/hydra/about.jpg'
import simulationImage from './assets/hydra/simulation-pinterest.jpg'
import educationImage from './assets/hydra/education.jpg'
import selfCareImage from './assets/hydra/selfcare.jpg'
import outdoorImage from './assets/hydra/outdoor.jpg'
import techBanner from './assets/hydra/tech-banner.jpg'
import tech1 from './assets/hydra/tech1.png'
import tech2 from './assets/hydra/tech2.png'
import tech3 from './assets/hydra/tech3.png'
import tech4 from './assets/hydra/tech4.png'

const services = [
  { title: 'SIMULATION', image: simulationImage, text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.' },
  { title: 'EDUCATION', image: educationImage, text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.' },
  { title: 'SELF-CARE', image: selfCareImage, text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.' },
  { title: 'OUTDOOR', image: outdoorImage, text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.' },
]

const processSteps = [
  ['01', '3D Conception &\nDesign'],
  ['02', 'Interaction\nDesign'],
  ['03', 'VR World\nUser Testing'],
  ['04', 'Hydra VR\nDeploy'],
]

const navItems = [
  ['ABOUT', 'about'],
  ['SERVICES', 'services'],
  ['TECHNOLOGIES', 'technologies'],
  ['HOW TO', 'process'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [toast, setToast] = useState('')

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  const showToast = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(''), 2800)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    showToast('Сообщение отправлено в Hydra')
  }

  return (
    <div className="hydra-app min-h-screen antialiased">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="hero-shell" id="top">
        <nav className="site-nav">
          <button className="brand-button" onClick={() => scrollTo('top')} aria-label="Hydra — наверх">
            <img src={logo} alt="Hydra" className="brand-logo" />
          </button>
          <div className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
            {navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}
          </div>
          <div className="nav-actions">
            <button className="outline-button nav-contact" onClick={() => scrollTo('contact')}>CONTACT US</button>
            <button className="gradient-button nav-join" onClick={() => scrollTo('contact')}>JOIN HYDRA</button>
            <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Открыть меню">
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>

        <div className="hero-grid section-width">
          <div className="hero-copy">
            <h1>Dive Into The Depths<br /><span>Of Virtual Reality</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae.</p>
            <div className="hero-cta-row">
              <button className="gradient-button hero-cta" onClick={() => scrollTo('contact')}>BUILD YOUR WORLD</button>
              <button className="arrow-button" onClick={() => scrollTo('about')} aria-label="Узнать больше"><ArrowRight size={29} strokeWidth={1.5} /></button>
            </div>
          </div>
          <div className="hero-media-wrap">
            <div className="hero-media-shadow" />
            <img className="hero-media" src={heroImage} alt="Человек в VR-шлеме" />
          </div>
        </div>

        <div className="contact-strip section-width">
          <ContactCell icon={<MapPin />} title="Pay Us a Visit" value="Union St, Seattle, WA 98101, United States" />
          <ContactCell icon={<PhoneCall />} title="Give Us a Call" value="(110) 1111-1010" />
          <ContactCell icon={<Mail />} title="Send Us a Message" value="Contact@HydraVTech.com" />
        </div>
      </header>

      <main>
        <section className="content-section section-width about-section" id="about">
          <SectionHeading title="INTRODUCTION" subtitle="TO HYDRA VR" />
          <p className="section-lead">Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
          <div className="about-grid">
            <div className="about-photo-wrap"><img src={aboutImage} alt="Пользователь в VR-гарнитуре" className="about-photo" /></div>
            <div className="about-copy">
              <SectionHeading title="ABOUT" subtitle="HYDRA VR" />
              <p>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudin tempor.</p>
              <button className="gradient-button small-cta" onClick={() => scrollTo('contact')}>LET’S GET IN TOUCH</button>
            </div>
          </div>
        </section>

        <section className="content-section section-width services-section" id="services">
          <div className="section-intro-row">
            <SectionHeading title="WHY BUILD" subtitle="WITH HYDRA?" />
            <p className="section-lead">Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-avatar"><img src={service.image} alt="" /></div>
                <h3>{service.title}</h3>
                <div className="service-divider" />
                <p>{service.text}</p>
                <button className="gradient-button card-cta" onClick={() => showToast(`${service.title}: скоро покажем демо`)}>TRY IT NOW</button>
              </article>
            ))}
          </div>
        </section>

        <section className="tech-section section-width" id="technologies">
          <div className="tech-banner" style={{ backgroundImage: `linear-gradient(90deg, rgba(81,72,114,.87), rgba(81,72,114,.55)), url(${techBanner})` }}>
            <div>
              <h2>TECHNOLOGIES &amp; HARDWARE</h2>
              <p>USED BY HYDRA VR.</p>
            </div>
            <button className="tech-down" onClick={() => scrollTo('process')} aria-label="К процессу"><ChevronDown size={28} /></button>
          </div>
          <div className="tech-logos">
            <img src={tech1} alt="Unreal Engine" />
            <img src={tech3} alt="Unity" />
            <img src={tech2} alt="Oculus" />
            <img src={tech4} alt="Vive" />
          </div>
        </section>

        <section className="content-section section-width process-section" id="process">
          <div className="section-intro-row">
            <SectionHeading title="HOW WE BUILD" subtitle="WITH HYDRA VR?" />
            <p className="section-lead">Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc.</p>
          </div>
          <div className="process-grid">
            {processSteps.map(([number, label]) => (
              <div className="process-item" key={number}>
                <div className="process-circle">{number}</div>
                <div className="process-label"><ArrowRight size={14} /> <span>{label.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</span></div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section section-width" id="contact">
          <div className="contact-card">
            <SectionHeading title="JOIN HYDRA" subtitle="Let’s Build Your VR Experience" center />
            {submitted ? (
              <div className="form-success"><div className="success-icon"><Check size={26} /></div><h3>Thank you!</h3><p>Мы получили вашу заявку и скоро свяжемся с вами.</p><button className="gradient-button small-cta" onClick={() => setSubmitted(false)}>SEND ANOTHER</button></div>
            ) : (
              <form className="hydra-form" onSubmit={handleSubmit}>
                <input required placeholder="First Name" aria-label="First Name" />
                <input required placeholder="Last Name" aria-label="Last Name" />
                <input required type="email" placeholder="Email" aria-label="Email" />
                <input required type="tel" placeholder="Phone Number" aria-label="Phone Number" />
                <input required className="full-field" placeholder="Subject" aria-label="Subject" />
                <textarea required className="full-field message-field" placeholder="Tell Us Something..." aria-label="Tell Us Something..." />
                <button type="submit" className="gradient-button send-button"><Send size={15} /> SEND TO HYDRA</button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer section-width">
        <img src={logo} alt="Hydra" className="footer-logo" />
        <div className="footer-column"><span>ABOUT</span><span>SERVICES</span><span>TECHNOLOGIES</span><span>HOW TO</span><span>JOIN HYDRA</span></div>
        <div className="footer-column"><span>FAQ</span><span>SITEMAP</span><span>CONDITIONS</span><span>LICENSES</span></div>
        <div className="footer-social"><span>SOCIALIZE WITH HYDRA</span><div className="social-row"><Facebook /><Twitter /><Linkedin /><Youtube /><Instagram /></div><button className="gradient-button footer-cta" onClick={() => scrollTo('contact')}>BUILD YOUR WORLD</button></div>
        <div className="footer-bottom">2023 © HYDRA LANDING PAGE BY ZINE. E. FALOUTI ALL RIGHTS RESERVED</div>
      </footer>

      {toast && <div className="toast"><Check size={16} /> {toast}</div>}
    </div>
  )
}

function ContactCell({ icon, title, value }: { icon: ReactNode; title: string; value: string }) {
  return <div className="contact-cell"><span className="contact-icon">{icon}</span><div><strong>{title}</strong><small>{value}</small></div></div>
}

function SectionHeading({ title, subtitle, center = false }: { title: string; subtitle: string; center?: boolean }) {
  return <div className={center ? 'section-heading center' : 'section-heading'}><h2>{title}</h2><h3>{subtitle}</h3>{!center && <ArrowRight className="heading-arrow" size={54} strokeWidth={1} />}</div>
}

createRoot(document.getElementById('root')!).render(<App />)

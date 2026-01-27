import { useState, useEffect } from 'react'
import './Home.css'

function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode))
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    document.body.className = darkMode ? 'dark-mode' : ''
  }, [darkMode])

  return (
    <div className="home-portfolio">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav>
          <div className="logo">
            Gopika Shree
          </div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <img src="/profile.jpg" alt="Gopika Shree" className="nav-profile" />
            </li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero-home">
        <div className="hero-bg">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting">Hello, I'm</div>
            <h1>
              Gopika <span className="highlight">Shree</span>
            </h1>
            <h2 className="typing-text">Frontend Developer</h2>
            <p>I design and develop modern, responsive websites and web applications, specializing in frontend technologies and user-centered design to create engaging, intuitive digital experiences.</p>
            <div className="cta-buttons">
              <button className="btn-primary">View My Work</button>
              <button className="btn-secondary">Download CV</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-container">
              <img src="/hero-profile.jpg" alt="Gopika Shree" className="profile-img" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-home">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I am a passionate frontend developer with expertise in creating beautiful, functional web applications. Currently interning at Arjava Technology and studying Computer Science.</p>
              <div className="quick-stats">
                <div className="stat">
                  <span className="number">5+</span>
                  <span className="label">Projects</span>
                </div>
                <div className="stat">
                  <span className="number">1+</span>
                  <span className="label">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-home">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">⚛️</div>
              <h3>React</h3>
              <p>Building interactive UIs</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🎨</div>
              <h3>CSS/HTML</h3>
              <p>Modern web styling</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3>JavaScript</h3>
              <p>Dynamic functionality</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-home">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-icon">🛒</div>
              </div>
              <h3>E-Commerce Platform</h3>
              <p>Modern shopping experience with React</p>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-icon">📊</div>
              </div>
              <h3>Analytics Dashboard</h3>
              <p>Data visualization with interactive charts</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-home">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <p>Ready to work together? Let's create something amazing!</p>
            <div className="contact-buttons">
              <button className="btn-primary">Send Message</button>
              <button className="btn-secondary">View LinkedIn</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
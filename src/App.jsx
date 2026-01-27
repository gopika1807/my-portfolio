import { useState, useEffect } from 'react'
import './App.css'

// Import all images
import profileImg from './assets/profile.jpg'
import heroProfileImg from './assets/hero-profile.jpg'
import iitPenPhoto from './assets/iit-pen-my-photo.jpeg'
import kamakotiSirPhoto from './assets/kamakoti-sir-photo.jpeg'
import hariKrishnanSirPhoto from './assets/hari-krishnan-sir.jpeg'
import aarumugamSirPhoto from './assets/aarumugam-sir.jpeg'
import linkedinIcon from './assets/linkedin-icon.png'
import instagramIcon from './assets/instagram-icon.avif'
import githubIcon from './assets/github-icon.png'

function App() {
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
    <div className="portfolio">
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
              <img src={profileImg} alt="Gopika Shree" className="nav-profile" />
            </li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="hero-bg">
          <div className="floating-shapes">
            <div className="shape shape-1 animate-bounce-slow bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl"></div>
            <div className="shape shape-2 animate-pulse-slow bg-gradient-to-r from-pink-400 to-red-500 rounded-full blur-xl"></div>
            <div className="shape shape-3 animate-spin-slow bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl"></div>
          </div>
        </div>
        <div className="hero-content relative z-10">
          <div className="hero-text">
            <div className="greeting animate-slide-in-left text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold tracking-wide">Hello, I'm</div>
            <h1 className="animate-scale-in animation-delay-300 text-6xl font-bold text-gray-900 leading-tight">
              Gopika <span className="highlight animate-gradient-x bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Shree</span>
            </h1>
            <h2 className="typing-text animate-slide-in-right animation-delay-500 text-2xl font-medium text-gray-700 mb-6">Hello, I'm Frontend developer and Data Science learner</h2>
            <p className="animate-fade-in-up animation-delay-700 text-lg text-gray-600 leading-relaxed max-w-2xl">I am an IIT student with a strong interest in technology and innovation. I design and develop modern, responsive websites and web applications, focusing on frontend technologies and user-centered design. I enjoy creating intuitive and engaging digital experiences while continuously learning and applying new skills to real-world projects.

</p>
            <div className="social-preview animate-bounce-in animation-delay-900 flex gap-6 mt-8">
              <div className="social-item group">
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7371572611111292929/" target="_blank" rel="noopener noreferrer" className="social-link backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <img src={linkedinIcon} alt="LinkedIn" className="social-profile-img" />
                </a>
                <span className="social-label text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">LinkedIn</span>
              </div>
              <div className="social-item group">
                <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <img src={instagramIcon} alt="Instagram" className="social-profile-img" />
                </a>
                <span className="social-label text-sm font-medium text-gray-700 group-hover:text-pink-600 transition-colors">Instagram</span>
              </div>
              <div className="social-item group">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <img src={githubIcon} alt="GitHub" className="social-profile-img" />
                </a>
                <span className="social-label text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">GitHub</span>
              </div>
            </div>
          </div>
          <div className="hero-image animate-float-in animation-delay-400">
            <div className="profile-container relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative rounded-full p-2">
                <img src={heroProfileImg} alt="Gopika Shree" className="profile-img hover:scale-110 transition-transform duration-500 rounded-full shadow-2xl w-80 h-80 object-cover aspect-square" />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-red-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-home">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="font-serif italic text-lg leading-relaxed mb-6">I am a passionate frontend developer with hands-on experience in building modern web applications. As a Hope3 Foundation student, I'm committed to using technology for positive impact while pursuing my 2nd year B.Sc. Computer Science at Nachiappa Swamigal Arts and Science College.</p>
              
              <p className="font-serif italic text-lg leading-relaxed mb-6">My journey in web development began with a curiosity for creating interactive digital experiences. I specialize in building responsive web and mobile applications using HTML, CSS, JavaScript, and React. I'm particularly drawn to crafting user-friendly interfaces that not only look beautiful but also provide seamless functionality.</p>
              
              <p className="font-serif italic text-lg leading-relaxed mb-6">When I'm not coding, I enjoy exploring new design trends, participating in coding challenges, and contributing to open-source projects. I believe in the power of clean, maintainable code and am always eager to learn from experienced developers in the community.</p>
              
              <div className="quick-stats">
                <div className="stat">
                  <span className="number">5+</span>
                  <span className="label">Projects</span>
                </div>
                <div className="stat">
                  <span className="number">1+</span>
                  <span className="label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="number">2nd</span>
                  <span className="label">Year Student</span>
                </div>
              </div>
            </div>
            
            <div className="about-image">
              <div className="id-card">
                <div className="id-card-header">
                  <div className="id-card-logo">👩‍💻</div>
                  <div className="id-card-title">Developer ID</div>
                </div>
                <div className="id-card-photo">
                  <img src={profileImg} alt="Gopika Shree" className="profile-photo" />
                </div>
                <div className="id-card-info">
                  <h4>Gopika Shree</h4>
                  <p>Frontend Developer & Data Science Learner</p>
                  <div className="id-details">
                    <span>Hope3 Foundation</span>
                    <span>B.Sc. Computer Science</span>
                    <span>IIT Student</span>
                  </div>
                </div>
                <div className="id-card-footer">
                  <div className="id-number">ID: DEV2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="home" className="home-section">
        <div className="container">
          <div className="home-content">
            <div className="home-text">
              <h2>Digital Dreams, Real Impact</h2>
              <p className="home-description">
                I am an IIT student with a strong interest in technology and innovation. I design and develop modern, responsive websites and web applications, focusing on frontend technologies and user-centered design. I enjoy creating intuitive and engaging digital experiences while continuously learning and applying new skills to real-world projects.
              </p>
            </div>
            <div className="digital-world-photos">
              <div className="photos-track">
                <div className="photo-container">
                  <img src={iitPenPhoto} alt="IIT Pen Photo" className="digital-photo" />
                  <span className="photo-label">IIT Pen Photo</span>
                </div>
                <div className="photo-container">
                  <img src={kamakotiSirPhoto} alt="Dr.Kamakoti Sir" className="digital-photo" />
                  <span className="photo-label">Dr.Kamakoti Sir</span>
                </div>
                <div className="photo-container">
                  <img src={hariKrishnanSirPhoto} alt="Hari Krishnan Sir" className="digital-photo" />
                  <span className="photo-label">Hari Krishnan Sir</span>
                </div>
                <div className="photo-container">
                  <img src={aarumugamSirPhoto} alt="Aarumugam Sir" className="digital-photo" />
                  <span className="photo-label">Aarumugam Sir</span>
                </div>
                <div className="photo-container">
                  <img src={iitPenPhoto} alt="IIT Pen Photo" className="digital-photo" />
                  <span className="photo-label">IIT Pen Photo</span>
                </div>
                <div className="photo-container">
                  <img src={kamakotiSirPhoto} alt="Dr.Kamakoti Sir" className="digital-photo" />
                  <span className="photo-label">Dr.Kamakoti Sir</span>
                </div>
                <div className="photo-container">
                  <img src={hariKrishnanSirPhoto} alt="Hari Krishnan Sir" className="digital-photo" />
                  <span className="photo-label">Hari Krishnan Sir</span>
                </div>
                <div className="photo-container">
                  <img src={aarumugamSirPhoto} alt="Aarumugam Sir" className="digital-photo" />
                  <span className="photo-label">Aarumugam Sir</span>
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
          <h2>My Projects</h2>
          <div className="projects-carousel">
            <div className="projects-track">
              <div className="project-card">
                <div className="project-icon">?</div>
                <h3>Quiz App</h3>
                <p>Mobile quiz applications built with React (question storage, scoring, timers)</p>
              </div>
              <div className="project-card">
                <div className="project-icon">×</div>
                <h3>Tic Tac Toe</h3>
                <p>Interactive game with win/draw detection and AI opponent</p>
              </div>
              <div className="project-card">
                <div className="project-icon">●</div>
                <h3>Connect3 & Connect4</h3>
                <p>Board games implementation using game logic and animations</p>
              </div>
              <div className="project-card">
                <div className="project-icon">□</div>
                <h3>Admission Form</h3>
                <p>Responsive web form for student admissions</p>
              </div>
              <div className="project-card">
                <div className="project-icon">◆</div>
                <h3>First Portfolio</h3>
                <p>This page (HTML/CSS) and other demo portfolio projects</p>
              </div>
              <div className="project-card">
                <div className="project-icon">★</div>
                <h3>My Portfolio</h3>
                <p>Modern React portfolio showcasing my skills and projects</p>
              </div>
              <div className="project-card">
                <div className="project-icon">?</div>
                <h3>Quiz App</h3>
                <p>Mobile quiz applications built with React (question storage, scoring, timers)</p>
              </div>
              <div className="project-card">
                <div className="project-icon">×</div>
                <h3>Tic Tac Toe</h3>
                <p>Interactive game with win/draw detection and AI opponent</p>
              </div>
              <div className="project-card">
                <div className="project-icon">●</div>
                <h3>Connect3 & Connect4</h3>
                <p>Board games implementation using game logic and animations</p>
              </div>
              <div className="project-card">
                <div className="project-icon">□</div>
                <h3>Admission Form</h3>
                <p>Responsive web form for student admissions</p>
              </div>
              <div className="project-card">
                <div className="project-icon">◆</div>
                <h3>Personal Portfolio</h3>
                <p>This page (HTML/CSS) and other demo portfolio projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-home">
        <div className="container">
          <h2>Let's Connect & Create</h2>
          <div className="contact-content">
            <div className="contact-intro">
              <p className="contact-tagline">💫 Ready to bring your ideas to life?</p>
              <p className="contact-description">I'm always excited to collaborate on innovative projects and discuss new opportunities. Whether you have a project in mind or just want to connect, I'd love to hear from you!</p>
            </div>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h3>Email Me</h3>
                <p>Drop me a line anytime</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">💼</div>
                <h3>LinkedIn</h3>
                <p>Let's connect professionally</p>
              </div>
            </div>
            <div className="contact-buttons">
              <button className="btn-primary">✨ Start a Conversation</button>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7371572611111292929/" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{textDecoration: 'none', display: 'inline-block'}}>🔗 View LinkedIn Profile</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">
                <img src={profileImg} alt="Gopika Shree" className="footer-profile" />
                <span>Gopika Shree</span>
              </div>
              <p className="footer-description">Frontend Developer passionate about creating beautiful and functional web experiences.</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Connect</h4>
                <div className="footer-social">
                  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7371572611111292929/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                  <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Gopika Shree. All rights reserved.</p>
            <p>Built with React & Love ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
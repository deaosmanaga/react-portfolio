function Hero({ darkMode, toggleDarkMode }) {
  return (
    <section id="about" className="hero-section">
      <div className="hero-left">
        <h1 className="hero-name">Dea Osmanaga</h1>
        <h2 className="hero-title">Software Engineer | Junior Data Engineer</h2>

        <div className="hero-contacts">
          <span>Tirana, Albania</span>
          <span>+355 69 544 4244</span>
          <span>osmanagad@gmail.com</span>
          <a href="https://www.linkedin.com/in/dea-osmanaga" target="_blank" rel="noopener noreferrer" className="contact-link"> LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src="/profile.jpg" alt="Dea Osmanaga" className="hero-photo" />

        <button onClick={toggleDarkMode} className="dark-button">
          {darkMode ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </section>
  );
}

export default Hero;
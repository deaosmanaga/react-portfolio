import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    { name: "HTML", level: 85 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "Python", level: 70 }
  ];

  const projects = [
    {
      title: "Personal Resume Website",
      description:
        "A responsive personal resume website built with HTML, CSS and JavaScript.",
      link: "#"
    },
    {
      title: "LEGO Data Engineering Project",
      description:
        "An academic project focused on loading LEGO CSV data into a database and designing a simple data warehouse structure.",
      link: "#"
    }
  ];

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="page">
        <div className="paper">
          <Navbar />
          <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <div className="cv-layout">
            <div className="left-column">
              <section className="cv-section" id="education">
                <h2>Education</h2>

                <div className="edu-item">
                  <h3>Master, Informatics Engineering (Software Engineering)</h3>
                  <p>European University of Tirana (UET)</p>
                  <span>2025 – Present</span>
                </div>

                <div className="edu-item">
                  <h3>Bachelor, Electronics & Digital Communication Engineering</h3>
                  <p>Epoka University, Tirane</p>
                  <span>Nov 2020 – Jul 2023</span>
                </div>
              </section>

              <Skills skills={skills} />

              <section className="cv-section">
                <h2>Languages</h2>
                <ul className="list">
                  <li>Albanian – Native</li>
                  <li>English – C1</li>
                  <li>Turkish – A2</li>
                  <li>German – A1</li>
                </ul>
              </section>
            </div>

            <div className="right-column">
              <section className="cv-section">
                <h2>Summary</h2>
                <p>
                  Software Engineer with a strong interest in building clean,
                  efficient and user-focused applications. Currently expanding my
                  skills in full stack development and stepping into data
                  engineering, learning how to design databases, work with
                  structured data and build simple data pipelines.
                </p>
              </section>

              <section className="cv-section">
                <h2>Work Experience</h2>

                <div className="timeline-item">
                  <div className="timeline-left">
                    <span>Aug 2024 – Present</span>
                  </div>

                  <div className="timeline-right">
                    <h3>Verification & Validation Test Engineer (Software Engineer)</h3>
                    <p className="muted">Kineton Albania</p>
                    <ul>
                      <li>Create and execute test cases for automotive software/electronic components.</li>
                      <li>Analyze results and report issues with clear documentation.</li>
                      <li>Work with INCA, ControlDesk, DIAnalyzer and Candela.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="cv-section">
                <h2>Courses</h2>

                <div className="timeline-item">
                  <div className="timeline-left">
                    <span>Feb 2025 – Present</span>
                  </div>

                  <div className="timeline-right">
                    <h3>Full Stack Developer Course</h3>
                    <p>
                      Building complete web apps: HTML/CSS/Bootstrap, JavaScript,
                      Python & Django, MySQL.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-left">
                    <span>May 2023 – Jul 2023</span>
                  </div>

                  <div className="timeline-right">
                    <h3>Data Analyst in Cloud – Alpha ERP (IMB)</h3>
                    <p>Intro to cloud/data concepts and reporting basics.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-left">
                    <span>Oct 2022 – Feb 2023</span>
                  </div>

                  <div className="timeline-right">
                    <h3>Graphic Design Course – Dominusoft</h3>
                    <p>Design basics and clean layouts.</p>
                  </div>
                </div>
              </section>

              <Projects projects={projects} />
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
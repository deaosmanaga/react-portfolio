import SkillBar from "./SkillBar";

function Skills({ skills }) {
  return (
    <section id="skills" className="cv-section">
      <h2>Technical Skills</h2>

      <p className="label">Programming & Web</p>
      {skills.map((skill, index) => (
        <SkillBar
          key={index}
          name={skill.name}
          level={skill.level}
        />
      ))}

      <p className="label">Databases & Data</p>
      <ul className="list">
        <li>MySQL</li>
        <li>Data engineering & ETL</li>
        <li>Database design basics</li>
        <li>Data analysis basics</li>
      </ul>

      <p className="label">Tools & Technologies</p>
      <ul className="list">
        <li>Git & GitHub</li>
        <li>VS Code</li>
        <li>MATLAB</li>
        <li>INCA, ControlDesk, DIAnalyzer, Candela</li>
      </ul>
    </section>
  );
}

export default Skills;
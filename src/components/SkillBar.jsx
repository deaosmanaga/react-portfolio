function SkillBar({ name, level }) {
  return (
    <div className="skill">
      <p>{name}</p>
      <div className="bar">
        <div className="fill" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
}

export default SkillBar;
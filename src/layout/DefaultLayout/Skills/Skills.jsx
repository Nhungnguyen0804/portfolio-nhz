import "./Skills.css";
import SoftSkillList from "./SoftSkillList";
import TechnicalSkillList from "./TechnicalSkillList";

function Skills() {
  return (
    <section className="skills section" id="skill">
      <h1 className="general-title">Skills</h1>
      <h2 className="general-h2">⚙️ Soft Skills</h2>
      <SoftSkillList />
      <h2 className="general-h2">💻 Technical Skills</h2>
      <TechnicalSkillList />
    </section>
  );
}
export default Skills;

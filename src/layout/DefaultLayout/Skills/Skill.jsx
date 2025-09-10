import "./Skills.css";
function Skill({
  icon1,
  text,
  width,
  height,
  size_icon = "60%",
  icon = false,
}) {
  return (
    <div className="skill-item">
      {icon && (
        <span
          className="skillItem-img"
          style={{ width: `$${width}`, height: `${height}` }}
        >
          {icon}
        </span>
      )}
      <img src={icon1} width={size_icon} />
      {/* text  */}
      <div className="skillItem-text" style={{ width: `${width}` }}>
        {text}
      </div>
    </div>
  );
}
export default Skill;

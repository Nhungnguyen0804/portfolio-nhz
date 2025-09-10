import "./Project.css";
import Button from "../../../components/Button/Button";
function Project({
  src,
  projectName,
  deploy = false,
  local = false,
  detail,
  external,
  internal,
  target,
}) {
  let minWidth = "150px";
  return (
    <div
      className="project-item"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div className="projectItem-detail">
        <div className="projectItem-title">{projectName}</div>
        <div className="projectItem-buttonArea">
          {detail && (
            <Button
              content="Detail"
              minWidth={minWidth}
              className="projectItem-btn"
              internal={internal}
              target={target}
            />
          )}
          {deploy && (
            <Button
              content="Live Demo"
              minWidth={minWidth}
              className="projectItem-btn"
              external={external}
              target={target}
            />
          )}

          {local && (
            <Button
              content="Source Code"
              minWidth={minWidth}
              className="projectItem-btn"
              external={external}
              target={target}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default Project;

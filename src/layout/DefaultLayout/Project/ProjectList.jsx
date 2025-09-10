import "./Project.css";
import Project from "./Project";
import images from "../../../assets/images/images";
import { routes } from "../../../routes/routes";
function ProjectList() {
  return (
    <section className="projectSection" id="project">
      <h1 className="general-title">📂 My Projects</h1>
      <h2 className="general-h2">🌍 Deployed Projects</h2>
      <div className="projectList">
        <Project
          src={images.weathery}
          projectName="Weathery - ReactJs Project"
          deploy
          detail
          target="_blank"
          external="https://nhungnguyen0804.github.io/weathery/"
          internal={"/detail/weathery"}
        />
        <Project
          src={images.rebox}
          projectName="Rebox - Flask Python Project"
          deploy
          detail
          target="_blank"
          external="https://nhungnguyen0804.pythonanywhere.com/"
          internal="/detail/rebox"
        />
      </div>
      <h2 className="general-h2">💻 Local Projects</h2>
      <div className="projectList">
        <Project
          src={images.caro}
          projectName="CaroGame - Python Project"
          local
          detail
          target="_blank"
          external="https://github.com/Nhungnguyen0804/CaroGame"
          internal="/detail/caro"
        />
      </div>
    </section>
  );
}
export default ProjectList;

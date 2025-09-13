import images from "../../../assets/images/images";
import Button from "../../../components/Button/Button";
import "./Banner.css";
function Banner() {
  return (
    <section className="banner" id="home">
      <div className="banner-left" width="50%">
        <p>
          <div className="welcome" style={{ lineHeight: "180%" }}>
            Welcome to my Portfolio!🌹
          </div>
          <div className="line-name">
            <h1>
              {" "}
              Hi! I'm <span className="highlight-pink">Nhung Nguyen</span>🩵{" "}
            </h1>
          </div>
          <h1>Frontend Developer Intern based in Hanoi, Vietnam</h1>
          <span>
            I have experience working with{" "}
            <span className="highlight highlight-reactjs">ReactJS</span>, and
            have also practiced with
            <span className=" highlight highlight-js"> JavaScript</span>,{" "}
            <span className="highlight highlight-c">Python</span> and{" "}
            <span className=" highlight highlight-c">C++</span> in academic and
            personal projects. I enjoy building intuitive, user-friendly
            interfaces and am eager to learn new technologies to further improve
            my skills.
          </span>
        </p>
        <div className="banner-left-button">
          <Button
            content="Contact me!"
            external="mailto:nhungnguyen8404@gmail.com"
          />
          <Button
            onClick={() => window.open("/cv.pdf", "_blank")}
            content="My CV"
          />
        </div>
      </div>
      <div className="banner-right">
        <img className="banner-img" src={images.avatar} width="90%" />
      </div>
    </section>
  );
}
export default Banner;

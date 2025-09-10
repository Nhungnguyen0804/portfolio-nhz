import FlowerEffect from "../../../components/FlowerEffect/FlowerEffect";
import "./AboutMe.css";
function AboutMe() {
  return (
    <section className="aboutMe section" id="about_me">
      <h1 className="general-title aboutMe-title">~About Me~</h1>
      <div className="aboutMe-content">
        <div className="aboutMe-content-left">
          <FlowerEffect />
        </div>
        <div className="aboutMe-content-right">
          <div className="">
            <div className="aboutMe-info-content">
              <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                <li>
                  💎 Fullname:{" "}
                  <span className="highlight-pink font-pacifico">
                    Nguyen Thi Hong Nhung
                  </span>
                </li>
                <li>
                  💎 Date of Birth:{" "}
                  <span className="highlight-pink font-pacifico">
                    08/04/2004
                  </span>
                </li>
                <li>
                  💎 Address:{" "}
                  <span className="highlight-pink font-pacifico">
                    Hanoi, Vietnam
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="aboutMe-edu">
            {" "}
            <h1 className="aboutMe-edu-title">Education</h1>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              <li>
                💎 VNU UNIVERSITY OF ENGINEERING AND TECHNOLOGY (VIETNAM
                NATIONAL UNIVERSITY, HANOI)
              </li>
              <li>
                💎
                <b>
                  <i> 10/2022 - 2026</i>
                </b>
              </li>
              <li>
                💎 Major :<span>INFORMATION SYSTEMS</span>
              </li>
              <li>
                💎 GPA :<span>3.36/4</span>
              </li>
            </ul>
          </div>
          <div className="aboutMe-obj">
            <h1 className="aboutMe-obj-title">Objective</h1>
            <p>
              💎 I am a final-year Information Systems student with a strong
              interest in Frontend development. I aim to work as a ReactJS
              Intern to apply my knowledge, gain real project experience, and
              learn new technologies. My long-term goal is to become a skilled
              developer and later expand my expertise to full-stack development,
              and contribute to large-scale projects.
            </p>
          </div>{" "}
        </div>
      </div>
    </section>
  );
}
export default AboutMe;

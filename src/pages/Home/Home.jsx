import AboutMe from "../../layout/DefaultLayout/AboutMe/AboutMeSection";
import Banner from "../../layout/DefaultLayout/Banner/Banner";
import Skills from "../../layout/DefaultLayout/Skills/Skills";
import StarsEffect from "../../components/StartsEffect/StarsEffect";
import ProjectList from "../../layout/DefaultLayout/Project/ProjectList";
import "./Home.css";

function Home() {
  return (
    <div className="home marginTop130px">
      <StarsEffect />
      <div className="home-content">
        <Banner />
        <AboutMe />
        <Skills />
        <ProjectList />
      </div>
    </div>
  );
}
export default Home;

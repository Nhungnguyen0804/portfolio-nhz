import AboutMe from "../../components/AboutMe/AboutMeSection";
import Banner from "../../components/Banner/Banner";
import StartsEffect from "../../components/StartsEffect/StarsEffect";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <StartsEffect />
      <div className="home-content">
        <Banner />
        <AboutMe />
      </div>
    </div>
  );
}
export default Home;

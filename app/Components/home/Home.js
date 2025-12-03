import "./Home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faEnvelope,
  faGraduationCap,
  faFolderOpen,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <section className="home container" id="home">
        <div className="intro">
          <img
            src="https://i.ibb.co/tMH69B5z/Untitled-1.png"
            height={203}
            width={242}
            alt=""
            className="home__img"
          />
          <h1 className="home__name">Julian Shah</h1>
          <span className="home__education">
            I am a roboticist and coffee enthusiast
          </span>

          <HeaderSocials />

          <a href="#contact" className="btn">
            Contact Me
          </a>
          <ScrollDown />
        </div>
      </section>
    </>
  );
};

export default Home;

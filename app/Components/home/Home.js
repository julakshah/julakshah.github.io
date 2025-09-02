import "./Home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <>
      <section className="home container" id="home">
        <div className="intro">
          <img
            src="https://i.ibb.co/tMH69B5z/Untitled-1.png"
            height={145}
            width={160}
            alt=""
            className="home__img"
          />
          <h1 className="home__name">Julian Shah</h1>
          <span className="home__education">I am a roboticist and coffee enthusiast</span>

          <HeaderSocials />

          <a href="#contact" className="btn">
            Contact Me
          </a>
          <ScrollDown />
        </div>

        <Shapes />
      </section>
    </>
  );
};

export default Home;

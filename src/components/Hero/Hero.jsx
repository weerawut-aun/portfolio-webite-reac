import "./Hero.css";

import imgReact from "../../assets/img-icon1.png";
import imgProfile from "../../assets/img.jpeg";
import imgHTML2 from "../../assets/img-icon2.png";
import imgHTML3 from "../../assets/img-icon3.png";
import imgHTML4 from "../../assets/img-icon4.png";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Devloper | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions.
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src={imgReact} alt="react" width={50} height={50} />
          </div>
          <img src={imgProfile} alt="profile" width={500} height={500} />
        </div>
        <div>
          <div className="tech-icon">
            <img src={imgHTML2} alt="" width={50} height={50} />
          </div>
          <div className="tech-icon">
            <img src={imgHTML3} alt="" width={50} height={50} />
          </div>
          <div className="tech-icon">
            <img src={imgHTML4} alt="" width={50} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

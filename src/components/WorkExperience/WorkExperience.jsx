import { useRef } from "react";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import "./WorkExperience.css";
import Slider from "react-slick";

import { GrFormNext, GrPrevious } from "react-icons/gr";
const WorkExperience = () => {
  const slideRef = useRef();
  const settings = {
    dots: false,
    Infinity: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    slideRef.current.slickNext();
  };
  const slideLeft = () => {
    slideRef.current.slickPrev();
  };
  return (
    <section className="experience-container">
      <h5>WorkExperience</h5>
      <div className="experience-content">
        <div className="arrow-left" onClick={slideLeft}>
          <GrPrevious size={20} />
        </div>
        <div className="arrow-right" onClick={slideRight}>
          <GrFormNext size={20} />
        </div>
        <Slider ref={slideRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;

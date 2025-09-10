import { FaLongArrowAltRight } from "react-icons/fa";

import worldimg from "../../../public/Images/world.png"

export const HeroSection = () => {
  return (
    <>
      <main className="hero-section main">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h1 className="heading-xl">
              Explore the Word, One Country at a Time.
            </h1>
            <p className="paragraph">
              Discover the history, culture, and beuty of every nation. Sort,
              search and filter through countries to find the details you.
            </p>
            <button className="btn btn-darken btn-inline bg-white-box">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </div>
          <div className="hero-image">
            <img src={worldimg} alt="World beuty img" className="banner-image" />
          </div>
        </div>
      </main>
    </>
  );
};

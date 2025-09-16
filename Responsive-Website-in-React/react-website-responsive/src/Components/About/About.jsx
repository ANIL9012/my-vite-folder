import React from "react";
import "./About.css";
import about_img from "../../assets/edusity_assets/about.png";
import play_icon from "../../assets/edusity_assets/play-icon.png";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={about_img} alt="about_img" className="about-img" />
          <img src={play_icon} alt="play_icon" className="play-icon" />
        </div>
        <div className="about-right">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
          <p>
            A university degree is one of the most recognized qualifications in
            the modern world. It not only represents a student’s academic but
            also reflects their ability to commit to a structured program of
            study. education.
          </p>
          <p>
            Beyond academic learning, university education plays a vital role in
            shaping a person’s critical thinking, communication, which broaden
            the world. society.
          </p>
          <p>
            In today’s competitive world, having a university degree can make a
            significant difference in professional growth. While skills and the
            foundation for building expertise.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

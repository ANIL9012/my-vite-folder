import React from "react";
import "./Programs.css";
import program_1 from "../../assets/edusity_assets/program-1.png";
import program_2 from "../../assets/edusity_assets/program-2.png";
import program_3 from "../../assets/edusity_assets/program-3.png";
import program_icon_1 from "../../assets/edusity_assets/program-icon-1.png";
import program_icon_2 from "../../assets/edusity_assets/program-icon-2.png";
import program_icon_3 from "../../assets/edusity_assets/program-icon-3.png";
import Title from "../Title/Title";
import About from "../About/About";

function Programs() {
  return (
    <>
      <div className="container">
        {/* import Title Component start */}
        <Title subTitle="Our PROGRAM" title="What We offer"/>
        {/* import Title Component end*/}
        <div className="programs">
          <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
              <img src={program_icon_1} alt="" />
              <p>Graduation Degree</p>
            </div>
          </div>
          <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
              <img src={program_icon_2} alt="" />
              <p>Masters Degree</p>
            </div>
          </div>
          <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
              <img src={program_icon_3} alt="" />
              <p>Post Degree</p>
            </div>
          </div>
        </div>
        {/* Import About Component start */}
        <About/>
        {/* Import About Component End */}
        {/* import Title Component Gallery Text start */}
        <Title subTitle="Gallery" title="What We offer"/>
        {/* import Title Component Gallery Text end*/}
      </div>
    </>
  );
}

export default Programs;

import React, { useRef } from "react";
import "./Testimonial.css";

import next_icon from "../../assets/edusity_assets/next-icon.png";
import back_icon from "../../assets/edusity_assets/back-icon.png";
import user_1 from "../../assets/edusity_assets/user-1.png";
import user_2 from "../../assets/edusity_assets/user-2.png";
import user_3 from "../../assets/edusity_assets/user-3.png";
import user_4 from "../../assets/edusity_assets/user-4.png";

function Testimonial() {
  const slider = useRef();

  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackword = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <>
      <div className="testimonials">
        <img
          src={next_icon}
          className="next-btn"
          alt="next-icon"
          onClick={slideForward}
        />
        <img
          src={back_icon}
          className="back-btn"
          alt="back-icon"
          onClick={slideBackword}
        />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="user_1" />
                  <div>
                    <h3>William jackson 1</h3>
                    <span>Edusity USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions of my life. The university provided me with
                  excellent academic support. It not only improved my knowledge
                  and skills but also gave me confidence for a successful
                  future.
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="user_1" />
                  <div>
                    <h3>William jackson 2</h3>
                    <span>Edusity USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions of my life. The university provided me with
                  excellent academic support. It not only improved my knowledge
                  and skills but also gave me confidence for a successful
                  future.
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="user_1" />
                  <div>
                    <h3>William jackson 3</h3>
                    <span>Edusity USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions of my life. The university provided me with
                  excellent academic support. It not only improved my knowledge
                  and skills but also gave me confidence for a successful
                  future.
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="user_1" />
                  <div>
                    <h3>William jackson 4</h3>
                    <span>Edusity USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions of my life. The university provided me with
                  excellent academic support. It not only improved my knowledge
                  and skills but also gave me confidence for a successful
                  future.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Testimonial;

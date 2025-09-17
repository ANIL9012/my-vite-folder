import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs.jsx";
import Title from "./Components/Title/Title.jsx";
import About from "./Components/About/About.jsx";
import Campus from "./Components/Campus/Campus.jsx";
import Testimonial from "./Components/Testimonials/Testimonial.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer.jsx";
import { useState } from "react";

function App() {

  const [playState, setPlayState] = useState(false);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div className="container">
          {/* import Title Component start */}
          <Title subTitle="Our PROGRAM" title="What We offer" />
          {/* import Title Component end*/}

          {/* import Programs Component start*/}
          <Programs />
          {/* import Programs Component end*/}

          {/* Import About Component start */}
          <About setPlayState={setPlayState} />
          {/* Import About Component End */}

          {/* import Title Component Gallery Text start */}
          <Title subTitle="Gallery" title="Campus Photos" />
          {/* import Title Component Gallery Text end*/}

          {/* import Campus Component  start */}
          <Campus />
          {/* import Campus Component  end*/}

          {/* import Title Component Testimonials Text start */}
          <Title subTitle="TESTIMONIALS" title="What Student Says" />
          {/* import Title Component Testimonials Text end*/}

          {/* import Testimonials main Component start */}
          <Testimonial />
          {/* import Testimonials main Component end*/}

          {/* import Title Component Contact us Text start */}
          <Title subTitle="Contact Us" title="Get in Touch" />
          {/* import Title Component Contact us Text end*/}

          {/* import Contact Component start */}
          <Contact />
          {/* import Contact Component end */}

          {/* import Footer Component start */}
          <Footer />
          {/* import Footer Component end */}
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs.jsx";
import Title from "./Components/Title/Title.jsx";
import About from "./Components/About/About.jsx";
import Campus from "./Components/Campus/Campus.jsx";
import Testimonial from "./Components/Testimonials/Testimonial.jsx";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div className="container">
          {/* import Title Component start */}
          <Title subTitle="Our PROGRAM" title="What We offer" />
          {/* import Title Component end*/}
          <Programs />
          {/* Import About Component start */}
          <About />
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
        </div>
      </div>
    </>
  );
}

export default App;

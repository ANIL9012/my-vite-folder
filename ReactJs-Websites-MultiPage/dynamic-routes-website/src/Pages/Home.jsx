import { HeroSection } from "../Components/UI/HeroSection";
import { About } from "./About";
import { Contact } from "./Contact";
import { Country } from "./Country";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Country />
      <Contact/>
    </>
  );
};

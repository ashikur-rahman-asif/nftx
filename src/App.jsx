import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Collections from "./components/Collections/Collections";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Item from "./components/Item/Item";

import NavBar from "./components/NavBar/NavBar";
import RoadMap from "./components/RoadMap/RoadMap";
import TeamMember from "./components/TeamMember/TeamMember";
function App() {
  return (
    <>
      <div className="home-page">
        <NavBar />
        <Hero />
        <AboutUs/>
        <Item/>
        <Collections/>
        <RoadMap/>
        <TeamMember/>
        <Faq/>
        <Footer/>
      </div>
    </>
  );
}

export default App;

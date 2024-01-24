import heroImage from "../../assets/hero.png";
const Hero = () => {
  return (
    <div className="container hero-section">
      <div className="hero-img-section">
        <img className="hero-img" src={heroImage} alt="" />
        <div className="mini-design"></div>
      </div>
      <div>
        <h3 className="hero-text">Discover Rare</h3>
        <h3 className="hero-gradiant-text">Digital Art</h3>
        <h3 className="hero-text">and Collect</h3>
        <h3 className="hero-gradiant-text">Digital Art</h3>
        <button className="discord-btn ">Explore Now</button>
      </div>
    </div>
  );
};

export default Hero;

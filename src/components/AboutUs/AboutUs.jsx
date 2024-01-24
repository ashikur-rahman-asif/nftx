import SingleCard from "./SingleCard";

const AboutUs = () => {
  const aboutData = [
    {
      number: "01",
      title: "High Quality",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores voluptas consectetur optio, ratione dignissimos mollitia?",
    },
    {
      number: "02",
      title: "Big Collection",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores voluptas consectetur optio, ratione dignissimos mollitia?",
    },
    {
      number: "03",
      title: "Top Resources",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores voluptas consectetur optio, ratione dignissimos mollitia?",
    },
    {
      number: "04",
      title: "Big Community",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores voluptas consectetur optio, ratione dignissimos mollitia?",
    },
  ];
  return (
    <div className="container about-us-section">
      <h5 className=" about-us">[ ABOUT US ]</h5>
      <h1 className="about-title">
        What is <span className="about-gradiant-text">NFTX?</span>{" "}
      </h1>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut et
        massa mi. Aliquam in hendrerit urna.
      </p>
      <div className="card-main">
        {aboutData.map((data, index) => (
          <SingleCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

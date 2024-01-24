// eslint-disable-next-line react/prop-types
const SingleCard = ({ number, title, description }) => {
  return (
    <div className="about-card text-white">
      <h1 className="about-card-number">{number}</h1>
      <h1 className="about-card-title">{title} </h1>
      <p className="about-card-des">{description}</p>
    </div>
  );
};

export default SingleCard;

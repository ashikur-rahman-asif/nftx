import member1 from "../../assets/member1.png";
import member2 from "../../assets/member2.png";
import member3 from "../../assets/member3.png";
import member4 from "../../assets/member4.png";
import Dribble from "../utils/Icons/Dribble";
import Fb from "../utils/Icons/Fb";
import Instagram from "../utils/Icons/Instagram";
import Linkedin from "../utils/Icons/Linkedin";
import Twitter from "../utils/Icons/Twitter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TeamMember = () => {
  const memberData = [
    {
      id: 1,
      img: member1,
      name: "Ralph Edwards",
      position: "Founder",
    },
    {
      id: 2,
      img: member2,
      name: "Jasos Smith",
      position: "Co Founder",
    },
    {
      id: 3,
      img: member3,
      name: "Tony Wings",
      position: "Designer",
    },
    {
      id: 4,
      img: member4,
      name: "Easther Howard",
      position: "Web Developer",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="container team-member-section">
      <h5 className=" about-us">[Teams]</h5>
      <h1 className="collections-title">Our Members</h1>
      <Slider {...settings}>
        {memberData.map((member) => (
          <div key={member.id} className="team-members-card" style="width: 350px;">
            <div>
            <img className="member-img" src={member.img} alt="" />
            <h1 className="member-name">{member.name}</h1>
            <h4 className="member-position">{member.position}</h4>
            <div className="member-icon">
              <Fb />
              <Dribble />
              <Twitter />
              <Linkedin />
              <Instagram />
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamMember;

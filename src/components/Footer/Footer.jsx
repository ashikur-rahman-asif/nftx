import { FaDiscord, FaWallet } from "react-icons/fa6";
import Fb from "../utils/Icons/Fb";
import Dribble from "../utils/Icons/Dribble";
import Twitter from "../utils/Icons/Twitter";
import Linkedin from "../utils/Icons/Linkedin";
import Instagram from "../utils/Icons/Instagram";

const Footer = () => {
  return (
    <div className=" footerr">
      <h1 className="footer-title">JOIN OUR COMMUNITY</h1>
      <p className="footer-des">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi
        Aliquam.{" "}
      </p>
      <div className="d-flex footer-btn">
        <button className="discord-btn ">
          <div>
            <FaDiscord />
          </div>
          Join Discord
        </button>
        <button className="wallet-btn ">
          <div>
            <FaWallet />
          </div>
          Connect Wallet
        </button>
      </div>
      <form className="form-subscribe">
        <div className="input-group">
          <input
            type="text"
            className="form-control input-lg"
            placeholder="Your eamil address"
          />
          <span className="input-group-btn">
            <button className="subs-btn" type="submit">
              Subscribe
            </button>
          </span>
        </div>
      </form>
      <div className="d-flex footer-icon">
        <Fb />
        <Dribble />
        <Twitter />
        <Linkedin />
        <Instagram />
      </div>
    </div>
  );
};

export default Footer;

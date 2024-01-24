import { NavLink } from "react-bootstrap";
import { FaWallet } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
const NavBar = () => {
  return (
    <div className="container navbar d-flex justify-content-between">
      <div>
        <h1 className="logo">NFTX</h1>
      </div>
      <div className="d-flex align-items-center nav-link">
        <NavLink className="text-white">Home</NavLink>
        <NavLink className="text-white">About</NavLink>
        <NavLink className="text-white">NFT</NavLink>
        <NavLink className="text-white">Our Team</NavLink>
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
    </div>
  );
};

export default NavBar;

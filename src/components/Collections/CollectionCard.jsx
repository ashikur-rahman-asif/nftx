/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import mini1 from "../../assets/mini1.svg";
import mini2 from "../../assets/mini2.svg";
import mini3 from "../../assets/mini3.svg";
const CollectionCard = ({
  img,
  days,
  hrs,
  min,
  sec,
  placesBid,
  title,
  bid,
  price,
  like,
}) => {
  return (
    <div className="collection-card">
      <div className="nft-img-section">
        <img className="nft-image" src={img} />
        
        {days && <div className="d-flex time-box ">
          <div className="d-flex align-items-center gap-2 ">
            <div className="d-flex flex-column align-items-center ">
              <h1 className="inner-text">{days}</h1>
              <p className="inner-text2">days</p>
            </div>
            <svg
              className="dot-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="25"
              viewBox="0 0 7 25"
              fill="none"
            >
              <circle cx="3.08771" cy="3.47058" r="3" fill="#D9D9D9" />
              <circle cx="3.08771" cy="21.4706" r="3" fill="#D9D9D9" />
            </svg>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="d-flex flex-column align-items-center">
              <h1 className="inner-text">{hrs}</h1>
              <p className="inner-text2">hrs</p>
            </div>
            <svg
              className="dot-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="25"
              viewBox="0 0 7 25"
              fill="none"
            >
              <circle cx="3.08771" cy="3.47058" r="3" fill="#D9D9D9" />
              <circle cx="3.08771" cy="21.4706" r="3" fill="#D9D9D9" />
            </svg>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="d-flex flex-column align-items-center">
              <h1 className="inner-text">{min}</h1>
              <p className="inner-text2">min</p>
            </div>
            <svg
              className="dot-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="25"
              viewBox="0 0 7 25"
              fill="none"
            >
              <circle cx="3.08771" cy="3.47058" r="3" fill="#D9D9D9" />
              <circle cx="3.08771" cy="21.4706" r="3" fill="#D9D9D9" />
            </svg>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex flex-column align-items-center">
              <h1 className="inner-text">{sec}</h1>
              <p className="inner-text2">sec</p>
            </div>
          </div>
        </div>}
      </div>
      <div className="nftCard-rest-section">
        <div className=" d-flex align-items-center gap-4 ">
          <div className="mini-image-size">
            <img className="main-mini-image" src={mini1} alt="" />
            <img className="mini-image1" src={mini2} alt="" />
            <img className="mini-image2" src={mini3} alt="" />
          </div>
          <div>
            <h3 className="bid">+ {placesBid} other placed bid</h3>
          </div>
        </div>
        <h1 className="nft-title">{title}</h1>
        <h3 className="higest-bid">Highest bid {bid}</h3>
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="higest-bid">{price} ETH</h3>
          <div className="d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                d="M14.9049 27.1226L14.9038 27.1217C11.4554 23.9946 8.65389 21.4528 6.70551 19.0707C4.76574 16.6992 3.74997 14.5776 3.74997 12.3039C3.74997 8.61146 6.64085 5.72058 10.3333 5.72058C12.4262 5.72058 14.4466 6.69853 15.7623 8.2435L16.3333 8.91405L16.9043 8.2435C18.22 6.69853 20.2404 5.72058 22.3333 5.72058C26.0258 5.72058 28.9166 8.61146 28.9166 12.3039C28.9166 14.5776 27.9009 16.6992 25.9609 19.0726C24.0147 21.4537 21.2176 23.9956 17.7747 27.1243L17.7639 27.1341L17.7622 27.1355L16.3352 28.4248L14.9049 27.1226Z"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
            <h3 className="higest-bid">{like}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;

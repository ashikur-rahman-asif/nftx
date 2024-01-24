import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="conteiner faq-section">
      <h1 className="faq-main-text">FAQ</h1>
      <div className=" main-faq ">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What are the NFTs?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi Aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut et massa mi Aliquam.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How do I get NFT? </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi Aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut et massa mi Aliquam.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What are the payment system?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi Aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut et massa mi Aliquam.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is refund policy?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi Aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut et massa mi Aliquam.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
    </div>
  );
};

export default Faq;

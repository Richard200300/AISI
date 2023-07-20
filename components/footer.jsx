import aisiLogo from "../public/assets/icons/dark.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="footer">
      <div className="wrapper">
        <p className="footer-sub-text">
          /subscribe to our newsletter & be the first to hear about new products
          & events
        </p>
        <div className="footer-email">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL ADDRESS"
            className="footer-input"
          />
        </div>
        <div className="footer-agreebtn">
          <p>agree & subscribe</p>
        </div>
      </div>
      <article className="footer-main">
        <div>
          /subscribe to our newsletter & be the first to hear about new products
          & events
        </div>
        <div>
          <Image src={aisiLogo} alt="aisiLogo" />
          <p className="social-media-text" >
            and offers a carefully curated collection of stylish and vegetable
            clothing pieces that are designed to elecate everyday looks from
            comfortable essentials to trendy statement pieces, aisi aims to
            empower individuals to express their unique sense of style with
            confidence
          </p>
        </div>
        <div>
          <p className="f12">  <em>/ site navigation</em></p>
          <ul className="footer-list">
            <li>home page</li>
            <li>shop </li>
            <li>collections</li>
            <li>brand</li>
            <li>contact</li>
          </ul>
       
        </div>
        <div>
        <p className="f12 "><em>/ customer care</em></p> 
        <ul className="footer-list">
            <li>refund & return policy </li>
            <li>collections</li>
            <li>care instructions</li>
            <li>faq</li>
          </ul>
         
        </div>
      </article>
    </section>
  );
};

export default Footer;

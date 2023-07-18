import Image from "next/image";
import aisiLogo from "../../public/assets/icons/dark.svg";
import headerdown from "../../public/assets/icons/headerdown.svg";
import headerHeart from "../../public/assets/icons/headerHeart.svg";
import headercart from "../../public/assets/icons/headercart.svg";
import leftarrow from "../../public/assets/icons/leftarrow.svg";
import headerimg from "../../public/assets/images/headerimg.png";
import headernike from "../../public/assets/images/headernike.png";

const Header = () => {
  return (
    <section className="header">
      {/* Header nav */}
      <section className="flex jcsb atc header-nav">
        <article className="flex atc">
          <div className="header-nav-box">
            <p>Shop</p>
          </div>
          <div className="flex atc header-nav-box hnb-flex">
            <p>Explore</p>
            <Image src={headerdown} alt="headerdown" className="pointer" />
          </div>
        </article>
        <Image src={aisiLogo} alt="aisiLogo" className="pointer" />
        <article className="flex atc">
          <div className="flex atc header-nav-box hnb-flex">
            <Image src={headerHeart} alt="headerHeart" className="pointer" />
            <p>Wishlist</p>
            <p>(0)</p>
          </div>
          <div className="flex atc header-nav-box hnb-flex">
            <Image src={headercart} alt="headercart" className="pointer" />
            <p>cart</p>
            <p>(0)</p>
          </div>
        </article>
      </section>
      {/* Header body  */}
      <section className="flex jcsb header-body">
        <article className="headertextcont">
          <div className="header-main-text">
            <p>
              /n<em className="itl">e</em>w 2<em className="itl">0</em>23
            </p>
            <p className="header-mid-text">
              s<em className="itl">u</em>mm<em className="itl">e</em>r
            </p>
            <p>
              c<em className="itl">o</em>llecti<em className="itl">o</em>n
            </p>
          </div>
          <div className="headerMaintext ucase">
            <p>
              aisi offers curated collection of stylish and versatile clothing
              pieces that are designed to elevate everyday looks. From
              comfortable esseentials to trendy statement pieces, aisi aims to
              empower individuals to express their unique sense of style with
              confidence
            </p>
          </div>
          <div className="textimgcont">
            <p className="ucase collab-text">
              <em>[ aisi x nike ]</em>
            </p>
            <Image src={headernike} alt="headernike" />
          </div>
          <div className="flex atc gp10 shopnowcont">
            <p>shop now</p>
            <Image src={leftarrow} alt="leftarrow" />
          </div>
        </article>
        <article className="headerimgcont flex jcc atc">
          <div className="miniheaderimgcont">
            <div className="headersmcont">
              <Image src={headerimg} alt="headerimg" className="headerimg" />

              <p className="ucase collab-img-text">
                <em>[ aisi x carhatt ]</em>
              </p>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Header;

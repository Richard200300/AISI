import Image from "next/image";
import global from "../public/assets/icons/globalscope.svg";
import headerdown from "../public/assets/icons/headerdown.svg";
import aisiLogo from "../public/assets/icons/dark.svg";
import headerHeart from "../public/assets/icons/headerHeart.svg";
import headercart from "../public/assets/icons/headercart.svg";
import flag from "../public/assets/icons/flag.svg";
const Navbar = () => {
  return (
    <div className="main-nav">
      <div className="navbar flex gp30">
        <ul className="flex atc">
          <li>help</li>
          <li>join us</li>
          <li>sign in</li>
        </ul>
        <article className="flex gp30">
          <div className="flex atc gp10 nav-lang-cont">
            <Image src={global} alt="global" />
            <p>language</p>
            <Image src={headerdown} alt="headerdown" />
          </div>
          <div className="flex atc gp10 nav-lang-cont">
            <Image src={flag} alt="global" />
            <p>ngn</p>
            <Image src={headerdown} alt="headerdown" />
          </div>
        </article>
      </div>
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
    </div>
  );
};

export default Navbar;

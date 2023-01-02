import "./Home.scss";
import Bio from "../../Components/Bio/Bio";
import ProfilePix from "../../Components/ProfilePix/ProfilePix";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export default function Home() {
  const open = document.getElementsByClassName("home__container");
  const close = document.getElementsByClassName("close");
  const nav = document.getElementsByClassName("nav");
  const tl = gsap.timeline({ defaults: { duration: 1, ease: "expo.inOut" } });

  const onClickOpen = () => {
    if (tl.reversed()) {
      tl.play();
    } else {
      tl.to(nav, { right: 0 })
        .to(nav, { height: "100vh" }, "-=.1")
        .to(
          "nav ul li a",
          { opacity: 1, pointerEvents: "all", stagger: 0.2 },
          "-=.8"
        )
        .to(close, { opacity: 1, pointerEvents: "all" }, "-=.8")
        .to("nav h2", { opacity: 1 }, "-=1");
    }
  };

  const onClickClose = () => {
    tl.reverse();
  };

  return (
    <>
      <div className="home">
        <div onClick={onClickOpen} className="home__container">
          <div class="home__bars"></div>
        </div>
        <div className="home__content">
          <div className="home__pic">
            <ProfilePix />
          </div>
          <div className="home__bio">
            <Bio />
          </div>
        </div>
        
        <nav className="nav">
          <h2>Naa Norkor</h2>
          <div onClick={onClickClose} class="close">
            <div></div>
          </div>
          <ul>
            <li>
              <Link className="nav__link" to="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav__link" href="#">
                About
              </Link>
            </li>
            <li>
              <Link className="nav__link" href="#">
                Projects
              </Link>
            </li>
            <li>
              <Link className="nav__link" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

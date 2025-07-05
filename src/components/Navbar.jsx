import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../assets/logo.webp";
import search from "../assets/search.png";
import user from "../assets/user.png";
import bag from "../assets/bag.png";
import mainImage from "../assets/main-image.jpg";

const Navbar = () => {
  const { t } = useTranslation();
  const textContainerRef = useRef(null);

  useGSAP(() => {
    const paragraphs = gsap.utils.toArray(".animated-text");

    const tl = gsap.timeline({ repeat: -1 });

    paragraphs.forEach((p, i) => {
      tl.to(p, { opacity: 1, duration: 2 }).to(
        p,
        { opacity: 0, duration: 0.6 },
        "+=5"
      );
    });
  }, []);

  return (
    <main>
      <div
        ref={textContainerRef}
        className="karla-font text-center relative h-8 bg-[var(--color-white)]"
      >
        <p className="animated-text absolute inset-0 z-10 opacity-0">
          Ahmed Coffee Like Never Before | <u>Shop Now</u>
        </p>
        <p className="animated-text absolute inset-0 z-20 opacity-0">
          Find Your Perfect Subscription | <u>Take The Quiz</u>
        </p>
        <p className="animated-text absolute inset-0 z-30 opacity-0">
          Free Shipping on <u>Subscriptions</u> and Orders over $40
        </p>
        <p className="animated-text absolute inset-0 z-40 opacity-0">
          Enjoy <u>10% Off Coffee</u> During Our 4th of July Sale |{" "}
          <u>Subscribers Get 15% Off</u>
        </p>
      </div>
      <nav className="flex-center p-8 bg-[var(--color-normal-white)]">
        <ul className="flex-center gap-4">
          <li>SHOP</li>
          <li>BEST SELLER</li>
          <li>SUBSCRIPTIONS</li>
        </ul>
        <img className="logo-image" src={logo} alt="coffee mug" />
        <ul className="flex-center gap-5">
          <li>LOCATIONS</li>
          <li>
            <a>
              <img className="icon-image" src={search} alt="search icon" />
            </a>
          </li>
          <li>
            <a>
              <img className="icon-image" src={user} alt="search icon" />
            </a>
          </li>
          <li>
            <a>
              <img className="icon-image" src={bag} alt="search icon" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="relative">
        <img
          className="w-full h-[80vh] object-cover"
          src={mainImage}
          alt="coffee beans"
        />
        <div className=" absolute top-40 left-10">
          <p>
            Enjoy 10% Off Coffee and Craft Instant During Our 4th of July Sale
          </p>
          <button>SHOP COFFEE</button>
        </div>
      </div>
    </main>
  );
};

export default Navbar;

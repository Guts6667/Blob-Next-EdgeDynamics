/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useRef } from "react";
// import MenuMobile from "../MenuMobile";
import style from "./Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
const burgerRef = useRef(null)
  const handleBtn = () => {
    setIsOpen(!isOpen);
    console.log(burgerRef.current);
    console.log(isOpen);
    if (burgerRef.current) {
        burgerRef.current.classList.toggle("open");
      }
  };


  return (
    <header className={style.container__header}>
      <div className={style.container__header_smartphone}>
      <div className={`${style.burger} ${isOpen ? style.open : ''}`} onClick={handleBtn} ref={burgerRef}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="#home">
          <img
            src="/assets/EdgeDynamics.png"
            className={style.logo}
            alt="Logo Edge Dynamics"
          />
        </a>
        <a href="#contact" className={style.contact_btn}>
          Join Us
        </a>
      </div>
      <div className={style.container__header_desktop}>
        <a href="#home">
          <img
            src="/assets/EdgeDynamics.png"
            className={style.logo}
            alt="Logo Edge Dynamics"
          />
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#product">Products & Services</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#contact">
            <button className={style.contact_btn}>Join Us</button>
          </a>
        </nav>
      </div>
      {isOpen && (
        <div className={style.container__navMenu}>
          <nav>
            <a href="#home" onClick={handleBtn}>
              <span>Home</span>
              <img src="/assets/chevron-right.svg" alt="Chevron Right" />
            </a>
            <a href="#about" onClick={handleBtn}>
              <span>About</span>
              <img src="/assets/chevron-right.svg" alt="Chevron Right" />
            </a>
            <a href="#products" onClick={handleBtn}>
              <span>Products & Services</span>
              <img src="/assets/chevron-right.svg" alt="Chevron Right" />
            </a>
            <a href="#contact" onClick={handleBtn}>
              <span>Join Us</span>
              <img src="/assets/chevron-right.svg" alt="Chevron Right" />
            </a>
          </nav>
          <div className={style.container__navMenu_socials}>
            <a href="#">
              <img src="/assets/twitter.svg" alt="Icon Twitter" />
            </a>
            <a href="mailto:info@edgedynamics.eu">
              <img src="/assets/paper-plane-solid.svg" alt="Icon Email" />
            </a>
            <a href="#">
              <img src="/assets/discord.svg" alt="Icon Discord" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";
// import styles from "./Header.module.css";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleBtn = () => {
//     const burger = document.querySelector(".burger")
//     console.log(burger)
//     // const burger = document.querySelector(".burger");
//     // setIsOpen(!isOpen);
//     // burger.classList.toggle("open");
//     // console.log(isOpen);
//   };

//   return (
//     <header className={styles.container__header}>
//       <div className={styles.container__headerSmartphone}>
//         <div className={styles.burger} onClick={handleBtn}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//         <a href="#home">
//           <img
//             src="/assets/EdgeDynamics.png"
//             className={styles.logo}
//             alt="Logo Edge Dynamics"
//           />
//         </a>
//         <a href="#contact" className={styles.contactBtn}>
//           Join Us
//         </a>
//       </div>
//       <div className={styles.container__headerDesktop}>
//         <a href="#home">
//           <img
//             src="/assets/EdgeDynamics.png"
//             className={styles.logo}
//             alt="Logo Edge Dynamics"
//           />
//         </a>

//         <nav>
//           <a href="#about">About</a>
//           <a href="#product">Products & Services</a>
//           <a href="#roadmap">Roadmap</a>
//           <a href="#contact">
//             <button className={styles.contactBtn}>Join Us</button>
//           </a>
//         </nav>
//       </div>
//       {isOpen && (
//         <div className={styles.container__navMenu}>
//           <nav>
//             <a href="#home" onClick={handleBtn}>
//               <span>Home</span>
//               <img src="/assets/chevron-right.svg" alt="Chevron Right" />
//             </a>
//             <a href="#about" onClick={handleBtn}>
//               <span>About</span>
//               <img src="/assets/chevron-right.svg" alt="Chevron Right" />
//             </a>
//             <a href="#products" onClick={handleBtn}>
//               <span>Products & Services</span>
//               <img src="/assets/chevron-right.svg" alt="Chevron Right" />
//             </a>
//             <a href="#contact" onClick={handleBtn}>
//               <span>Join Us</span>
//               <img src="/assets/chevron-right.svg" alt="Chevron Right" />
//             </a>
//           </nav>
//           <div className={styles.container__navMenuSocials}>
//             <a href="#">
//               <img src="/assets/twitter.svg" alt="Icon Twitter" />
//             </a>
//             <a href="mailto:info@edgedynamics.eu">
//               <img src="/assets/paper-plane-solid.svg" alt="Icon Email" />
//             </a>
//             <a href="#">
//               <img src="/assets/discord.svg" alt="Icon Discord" />
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;



/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import MenuMobile from "../MenuMobile";
import "@/styles/Header.css";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleBtn = () => {
        const burger = document.querySelector('.burger');
        setIsOpen(!isOpen)
        burger.classList.toggle("open")
        console.log(isOpen);
    }

    // return(
    //     <header className="container__header">
    //         <div className="container__header-mobile">
    //             <div className="burgerBtn" onClick={handleBtn}>
    //                 <span className="span1"></span>
    //                 <span className="span2"></span>
    //                 <span className="span3"></span>
    //             </div>
    //             <img src="/assets/edgeDynamics.png" alt="Logo EdgeDynamic" className="logo" />
    //             <button className="contactBtn">Join Us</button>
    //         {isOpen && <MenuMobile />}
    //         </div>
    //         <div className="container__header-desktop">

    //         </div>
    //     </header>
    // )

    return(
        <header className="container__header">
            <div className="container__header-smartphone">
                <div className="burger" onClick={handleBtn}>
                   <span></span>
                   <span></span>
                   <span></span>
                </div>
                <a href="#home">
                    <img src="/assets/EdgeDynamics.png" className="logo" alt="Logo Edge Dynamics" />
                </a>
                <a href="#contact" className="contact-btn">Join Us</a>
            </div>
            <div className="container__header-desktop">
                <a href="#home">
                <img src="/assets/EdgeDynamics.png" className="logo" alt="Logo Edge Dynamics" />
                </a>
            
            <nav>
                <a href="#about">About</a>
                <a href="#product">Products & Services</a>
                <a href="#roadmap">Roadmap</a>
                <a href="#contact" ><button className="contact-btn">Join Us</button></a>
            </nav>
            </div>
            { isOpen && (
            <div className="container__navMenu">
                <nav>
                    <a href="#home" onClick={handleBtn}><span>Home</span><img src="/assets/chevron-right.svg" alt="Chevron Right" /></a>
                    <a href="#about" onClick={handleBtn}><span>About</span><img src="/assets/chevron-right.svg" alt="Chevron Right" /></a>
                    <a href="#products" onClick={handleBtn}><span>Products & Services</span><img src="/assets/chevron-right.svg" alt="Chevron Right" /></a>
                    <a href="#contact" onClick={handleBtn}><span>Join Us</span><img src="/assets/chevron-right.svg" alt="Chevron Right" /></a>
                </nav>
                <div className="container__navMenu-socials">
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
    )
}

export default Header;
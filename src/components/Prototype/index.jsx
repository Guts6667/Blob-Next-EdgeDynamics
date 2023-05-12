import styles from "./Prototype.module.scss";
import Image from "next/image";
import SaudiExcellence from "/public/assets/saudiExcellence.png";
import { useState, useEffect } from "react";
export default function Prototype() {
  const images = [
    {
      id: 1,
      url: "/assets/ATS.png",
      partner: "ATS",
      width: 100,
      height: 100,
      mobilewidth: 200,
      mobileheight: 200,
    },
    {
      id: 2,
      url: "/assets/Chevron.png",
      partner: "Chevron",
      width: 178,
      height: 100,
      mobilewidth: 356,
      mobileheight: 200,
    },
    {
      id: 3,
      url: "/assets/PhoenixContact.png",
      partner: "Phoenix Contact",
      width: 190,
      height: 50,
      mobilewidth: 380,
      mobileheight: 100,
    },
    {
      id: 4,
      url: "/assets/minister.png",
      partner: "minister van verkeer en waterstaat",
      width: 233,
      height: 100,
      mobilewidth: 466,
      mobileheight: 200,
    },
    {
      id: 5,
      url: "/assets/Exxon.png",
      partner: "ExxonMobil",
      width: 200,
      height: 46,
      mobilewidth: 400,
      mobileheight: 92,
    },
    {
      id: 6,
      url: "/assets/Shell.png",
      partner: "Shell",
      width: 142,
      height: 100,
      mobilewidth: 284,
      mobileheight: 200,
    },
  ];
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);
  return (
    <section id="roadmap" className={styles.container__prototype}>
      <div className={styles.container__prototype_title}>
        <span className="section_title">Clients & Business Relations</span>
        <h2>Prototype request for</h2>
      </div>
      <div className={styles.mainPartner}>
        <Image
          src={SaudiExcellence}
          alt={"Saudi Excellence"}
          width={width > 768 ? 490 : 980}
          height={width > 768 ? 84 : 168}
        />
      </div>
      <div className={styles.container__prototype_content}>
        {images.map((image) => (
          <div className={styles.box_img} key={image.id}>
            <Image
              src={image.url}
              alt={image.partner}
              width={width > 768 ? image.width : image.mobilewidth}
              height={width > 768 ? image.height : image.mobileheight}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

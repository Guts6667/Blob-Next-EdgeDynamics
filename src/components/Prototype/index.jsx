import styles from "./Prototype.module.scss";
import Image from "next/image";
import SaudiExcellence from "/public/assets/saudiExcellence.png";
export default function Prototype() {
  const images = [
    {
      id: 1,
      url: "/assets/ATS.png",
      partner: "ATS",
      with: 300,
    },
    {
      id: 2,
      url: "/assets/Chevron.png",
      partner: "Chevron",
    },
    {
      id: 3,
      url: "/assets/PhoenixContact.png",
      partner: "Phoenix Contact",
    },
    {
      id: 4,
      url: "/assets/minister.png",
      partner: "minister van verkeer en waterstaat",
      with: 233,
      height: 100,
    },
    {
      id: 5,
      url: "/assets/Exxon.png",
      partner: "ExxonMobil",
      with: 200,
      height: 46,
    },
    {
      id: 6,
      url: "/assets/Shell.png",
      partner: "Shell",
      with: 142,
      height: 100,
    },
  ];
  return (
    <section id="roadmap" className={styles.container__prototype}>
      <div className={styles.container__prototype_title}>
        <span className="section_title">Clients & Business Relations</span>
        <h2>Prototype request for</h2>
      </div>
      <div className={styles.mainPartner}>
        <Image src={SaudiExcellence} alt={"SaudiExcellence"} fill={true} />
      </div>
      <div className={styles.container__prototype_content}>
        {images.map((image) => (
          <div className={styles.box_img} key={image.id}>
            <Image src={image.url} alt={image.partner} fill={true} />
          </div>
        ))}
      </div>
    </section>
  );
}

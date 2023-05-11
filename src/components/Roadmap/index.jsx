import styles from "./Roadmap.module.scss"
import roadmap from "public/assets/roadmap.png"
import Image from "next/image";
export default function Roadmap() {
  return (
    <section id="roadmap" className={styles.container__roadmap}>
        <div className={styles.container__roadmap_title}>
        <span className='section_title'>Roadmap</span>
        <h2>ROADMAP 2020 - 2024</h2>
      </div>
      <div className={styles.container__roadmap_content}>
        <Image className={styles.img} src={roadmap} alt="Roadmap Edge Dynamics"
        layout="fill" objectFit="contain" objectPosition="center" quality={100} />
      
        </div>
    </section>
  )
}

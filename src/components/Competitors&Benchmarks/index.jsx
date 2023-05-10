import style from "./CompetitorsBenchmarks.module.scss";
import Image from "next/image";
export default function CompetitorsBenchmarks() {
  return (
    <section className={style.container__compBen}>
      <div className={style.container__compBen_title}>
        <span className="section_title">Products & Services</span>
        <h2>COMPETITORS & BENCHMARKS</h2>
        <p>
          They're <strong> 5 companies</strong> in the world in our
          segment, 2 of them have developed the Ilot solution for internal use
          only.
        </p>
      </div>
      <div className={style.container__compBen_content}>
        <Image
          src="/assets/comp-ben-table.png"
          alt="Competitors & Benchmarks"
          width={1200}
          height={800}
          ratio={3 / 2}
          quality={100}
          objectFit="contain"
        />
      </div>
    </section>
  );
}

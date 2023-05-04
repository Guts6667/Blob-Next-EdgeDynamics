import style from "./OurVision.module.scss";

export default function OurVision() {
  return (
    <section className={style.container__ourVision}>
      <div className={style.container__ourVision_title}>
        <span className='section_title'>About us</span>
        <h2>OUR AMBITION & VISION</h2>
      </div>
      <div className={style.container__ourVision_content}>
        <p>
          Our ambition is to position itself as a unique leading innovative
          solution in the industry.
          <br />
          Our vision is to open the way for a new generation of start-up to
          compete with the few giants.
        </p>
      </div>
    </section>
  );
}

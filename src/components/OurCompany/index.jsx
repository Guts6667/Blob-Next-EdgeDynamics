import style from "./OurCompany.module.scss"

export default function OurCompany() {
  return (
    <section className={style.container__ourCompany} id="about">
      <div className={style.container__ourCompany_title}>
        <span className="section_title">About us</span>
        <h2>OUR COMPANY</h2>
      </div>
      <div className={style.container__ourCompany_content}>
        <article className={style.box_company}>
          <p>
            ED is an extremely innovative young start-up developing and
            implementing IIoT solution for the industrial sector using Ai,
            miniaturisation and LoRaWan wireless technology. We envision a
            future where wireless IOT devices such as temperature, vibration,
            humidity and pressure sensors will be widely used to decrease very
            significantly the expensive installation cost for non-critical
            applications.
          </p>
        </article>
        <article className={style.box_company}>
          <img src="/assets/edgeDynamics.png" alt="Logo Edge Dynamics" />
          <p>
            We net and nod live data points to monitor hundred of sim the
            condition of equipment at all time to detect changes that can result
            in unexpected equipment failures.
          </p>
        </article>
      </div>
    </section>
  );
}

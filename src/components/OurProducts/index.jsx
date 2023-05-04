import style from "./OurProducts.module.scss"
export default function OurProducts() {
    const Sensors = [
        {
            id:"53ERGD",
            title: "EDGE-T",
            type: "(Surface) Temperature Sensor",
            measurement: "Temperature",
            specs: ["Range: -20 to 120°C (-4 to 248°F)", "Resolution: 0.5°C", "Measuring Length: 1sec to 1min", "Customizable upper and lower limit treshold"],
            height: "6.9",
            diameter:"3.9",
            picture: "Edge-H.png"
        },
        {
            id:"7YHTG",
            title: "EDGE-V",
            type: "Vibration Sensor",
            measurement: "Velocity & Acceleraction (RMS)",
            specs: ["Accelerator: 0 to 130m/s² (Triaxial)", "Velocity: O to 20mm/s (Triaxial)", "Measurement frequency band: 10 to 1,00KHz", "Resolution: +/-3dB", "Measuring Length: 1sec to 1min", "Customizable upper and lower limit treshold"],
            height: "6.9",
            diameter:"3.9",
            picture: "Edge-H.png"
        },
        {
            id:"89IKJ",
            title: "EDGE-P",
            type: "Pressure Sensor",
            measurement: "In-line Pressure Gauge",
            specs: ["Pressure Range: 0 to 3500 psi (250bar)", "Process connection: 1/2 NPT", "Resolution: 0.035", "Resolution: +/-3dB", "Measuring Length: 1sec to 1min", "Customizable upper and lower limit treshold"],
            height: "10.7",
            diameter:"3.9",
            picture: "Edge-H.png"
        },
        {
            id:"345ET",
            title: "EDGE-H",
            type: "Humidity Sensor",
            measurement: "Performance specifications",
            specs: ["Measurement: Humidity", "RH Humidity range: 0 to 100%", "Accuracy: +/-2.0%", "Resolution: +/-3dB", "Measuring Length: 1sec to 1min", "Customizable upper and lower limit treshold"],
            height: "5.3",
            diameter:"3.9",
            picture: "Edge-H.png"
        },
    ]
        return(
            <section className={style.container__product}>
                <p className={style.container__product_description}>We are <strong>ATEX certify zone</strong> on one of the few in the entire industry. We have 16 patents as industrial property and our sensors are the most miniaturized in the world.</p>
                <div className={style.container__product_content}>
                    {Sensors.map((sensor) => {
                        return(
                        <article className={style.box__product} key={`${sensor.id}-${sensor.title}`} >
                            <div className={style.box__product_description}>
                                <div className={style.box__product_title}>
                                    <h3>{sensor.title}</h3>
                                    <img src="/assets/EX-logo.svg" alt="Logo ATEX" />
                                </div>
                                <div className={style.box__product_infos}>
                                <span className={style.type}>{sensor.type}</span><br/>
                                <span><strong>Performance specifications</strong></span><br/>
                                <span>Measurement: {sensor.measurement}</span>
                                <ul>
                                    {sensor.specs.map((element) => {
                                        return(
                                            <li key={`${sensor.id}-${element}`}>{element}</li>
                                        )
                                    })}
                                </ul>
                                </div>
                            </div>
                            <div className={style.box__product_picture}>
                                <img src="/assets/Edge-H.png" alt={sensor.title} />
                                <span>Height: {sensor.height}cm - Diameter: {sensor.diameter}cm</span>
                            </div>  
                        </article>
                        )
                    })}
                </div>
            </section>
        )
  
}

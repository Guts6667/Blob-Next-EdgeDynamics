import CarouselItem from "../CarouselItem";
import style from "./Specifications.module.scss";
import { useState } from "react";
export default function Specifications() {
  const [index, setIndex] = useState(0);

  const sensors = [
    {
      id: "6H6GFd",
      type: "SENSORS",
      premium: true,
      network: false,
      cloud: false,
      analytic: false,
      maintenance: "Online Troubleshooting",
      service: false,
      color: "#FAFFCD",
    },
    {
      id: "8UYhg",
      type: "SMART",
      premium: true,
      network: "Private Managed Network Server",
      cloud: "Private Managed Cloud",
      analytic: "Trend Analysis, (Private)Dashboard, AI Failure detection",
      maintenance: "Option",
      service: "End of life Devices will be replaced for kind",
      color: "#F0FD71",
    },
    {
      id: "45YUFHGmlkj",
      type: "FULL",
      premium: true,
      network: "Private | Public | On-premise",
      cloud: "Private or public On-premise",
      analytic: "Trend Analysis, (Private) Dashboard(s), AI Failure detection",
      maintenance: "Online Troubleshooting, Onsite Maintenance",
      service:
        "End of life Devices will be replaced free of charge for the current generation",
      color: "#9DAB11",
    },
  ];
  let currentIndex = 0;
  const handleSwipe = () => {
    if (index < sensors.length) {
      setIndex(currentIndex + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <section className={style.container__specs}>
      <div className={style.container__specs_heads}>
        <div className={style.head}>
          <span>Profesionnal Edge Sensor</span>
        </div>
        <div className={style.head}>
          <span>Premium Edge Gateway Services</span>
        </div>
        <div className={style.head}>
          <span>Network Server & Management </span>
        </div>
        <div className={style.head}>
          <span>Cloud Setup & Management</span>
        </div>
        <div className={style.head}>
          <span>Data Analytics & Visualization</span>
        </div>
        <div className={style.head}>
          <span>Maintenance & Troubleshooting</span>
        </div>
        <div className={style.head}>
          <span>Lifetime upgrade Service</span>
        </div>
        {/* <div>
                      <span>* = ATEX zone 0</span>
                  </div> */}
      </div>
      <div
        className={style.container__specs_carousel}
        onTouchStart={(e) => {
          handleSwipe(e);
        }}
      >
        <CarouselItem
          key={`${sensors[currentIndex].type}-${sensors[currentIndex].id}`}
          type={sensors[currentIndex].type}
          premium={sensors[currentIndex].premium}
          network={sensors[currentIndex].network}
          cloud={sensors[currentIndex].cloud}
          analytic={sensors[currentIndex].analytic}
          maintenance={sensors[currentIndex].maintenance}
          service={sensors[currentIndex].service}
          color={sensors[currentIndex].color}
        />
        <div className={style.container__specs_dot}></div>
        {/* {sensors.map((sensor) => {
                      return(
                          <CarouselItem key={`${sensor.type}-${sensor.id}`} type={sensor.type} premium={sensor.premium} network={sensor.network} cloud={sensor.cloud} analytic={sensor.analytic} maintenance={sensor.maintenance} service={sensor.service}/>
                      )  
                  })} */}
      </div>
    </section>
  );
}

import CarouselItem from "../CarouselItem";
import style from "./Specifications.module.scss";
import { useState, useRef } from "react";
export default function Specifications() {
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(sensors.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const goToNextSlide = () => {
    if (currentIndex === sensors.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const [touchStart, setTouchStart] = useState(0);
  const [touchMove, setTouchMove] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e) => {
    setTouchMove(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    setTouchEnd(touchStart - touchMove);
    if (touchStart - touchMove > 50) {
      goToNextSlide();
    }
    if (touchStart - touchMove < -50) {
      goToPrevSlide();
    }
  };

  // Create a function that will update the index depending on the dot index clicked.
  const handleDotClick = (dotIndex) => {
    setCurrentIndex(dotIndex);
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
      </div>
      <div
        className={`${style.container__carousel} ${style.container__carousel_xl}`}
      >
        <div className={style.container__carousel_wrapper}>
          {sensors.map((sensor) => {
            return (
              <CarouselItem
                key={`${sensor.type}-${sensor.id}`}
                type={sensor.type}
                premium={sensor.premium}
                network={sensor.network}
                cloud={sensor.cloud}
                analytic={sensor.analytic}
                maintenance={sensor.maintenance}
                service={sensor.service}
                color={sensor.color}
              />
            );
          })}
        </div>
      </div>
      <div
        className={`${style.container__carousel} ${style.container__carousel_sm}`}
      >
        <div
          className={style.container__carousel_wrapper}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
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
          <div className={style.dots}>
            {[...Array(sensors.length)].map((_, index) => (
              <span
                key={index}
                className={`${style.dot_item} ${
                  currentIndex === index ? style.active : ""
                }`}
                //if the item with the index is the current index, then change the background color to the same color as the sensor.color
                style={{
                  backgroundColor:
                    currentIndex === index
                      ? sensors[currentIndex].color
                      : "#2525",
                }}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

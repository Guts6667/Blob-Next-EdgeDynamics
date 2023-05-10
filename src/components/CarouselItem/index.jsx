import style from "./CarouserlItem.module.scss";
import Image from "next/image";
const CarouselItem = ({
  type,
  premium,
  network,
  cloud,
  analytic,
  maintenance,
  service,
  color,
}) => {
  const itemStyle = {
    border: `solid 1px ${color}`,
  };
  const itemTitleStyle = {
    backgroundColor: `${color}`,
  };

  return (
    <div className={style.item} style={itemStyle}>
      <div className={style.item_title} style={itemTitleStyle}>
        <span>{type}</span>
      </div>

      <div className={style.item_cell}>
        <span>
          Temperature*
          <br />
          3-axis Vibration*
          <br />
          Humidity*
          <br />
          Pressure gauge
          <br />
        </span>
      </div>
      <div className={style.item_cell}>
        {premium && (
          <Image
            src="/assets/valid.svg"
            width={30}
            height={30}
            alt="Icon valid"
          />
        )}
      </div>
      <div className={style.item_cell}>
        {network && <span>{network}</span>}
        {!network && (
          <Image
            src="/assets/invalid.svg"
            width={30}
            height={30}
            alt="Icon valid"
          />
        )}
      </div>
      <div className={style.item_cell}>
        {!cloud && (
          <Image
            src="/assets/invalid.svg"
            width={30}
            height={30}
            alt="Icon valid"
          />
        )}
        {cloud && <span>{cloud}</span>}
      </div>
      <div className={style.item_cell}>
        {analytic && <span>{analytic}</span>}
        {!analytic && (
          <Image
            src="/assets/invalid.svg"
            width={30}
            height={30}
            alt="Icon valid"
          />
        )}
      </div>
      <div className={style.item_cell}>
        <span>{maintenance}</span>
      </div>
      <div className={style.item_cell}>
        {!service && (
          <Image
            src="/assets/invalid.svg"
            width={30}
            height={30}
            alt="Icon valid"
          />
        )}
        {service && <span>{service}</span>}
      </div>
    </div>
  );
};

export default CarouselItem;

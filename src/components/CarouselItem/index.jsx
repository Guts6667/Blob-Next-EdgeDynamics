import style from "./CarouserlItem.module.scss";
import Image from "next/image";
import validIcon from '/public/assets/valid.svg';
import invalidIcon from "/public/assets/invalid.svg" 
/**
 *
 * @param {
 * // Type of device
 * type: string,
 * // Premium
 * premium: boolean,
 * // Network
 * network: string,
 * // Cloud
 * cloud: string,
 * // Analytic
 * analytic: string,
 * // Maintenance
 * maintenance: string,
 * // Service
 * service: string,
 * // Color
 * color: string, }
 *
 * @returns {JSX.Element}   // Carousel Item
 */
export default function CarouselItem({
  type,
  premium,
  network,
  cloud,
  analytic,
  maintenance,
  service,
  color,
}) {
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
          <Image src={validIcon} width={30} height={30} alt="Icon valid" />
        )}
      </div>
      <div className={style.item_cell}>
        {network && <span>{network}</span>}
        {!network && (
          <Image src={invalidIcon} width={30} height={30} alt="Icon Invalid" />
        )}
      </div>
      <div className={style.item_cell}>
        {!cloud && (
          <Image src={invalidIcon} width={30} height={30} alt="Icon invalid" />
        )}
        {cloud && <span>{cloud}</span>}
      </div>
      <div className={style.item_cell}>
        {analytic && <span>{analytic}</span>}
        {!analytic && (
          <Image src={invalidIcon} width={30} height={30} alt="Icon invalid" />
        )}
      </div>
      <div className={style.item_cell}>
        <span>{maintenance}</span>
      </div>
      <div className={style.item_cell}>
        {!service && (
          <Image src={invalidIcon} width={30} height={30} alt="Icon invalid" />
        )}
        {service && <span>{service}</span>}
      </div>
    </div>
  );
}

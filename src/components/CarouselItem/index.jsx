import style from "./CarouserlItem.module.scss";
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
    backgroundColor: color,
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
        {premium && <img src="/assets/valid.svg" alt="Icon valid" />}
      </div>
      <div className={style.item_cell}>
        {network && <span>{network}</span>}
        {!network && <img src="/assets/invalid.svg" alt="Icon valid" />}
      </div>
      <div className={style.item_cell}>
        {!cloud && <img src="/assets/invalid.svg" alt="Icon valid" />}
        {cloud && <span>{cloud}</span>}
      </div>
      <div className={style.item_cell}>
        {analytic && <span>{analytic}</span>}
        {!analytic && <img src="/assets/invalid.svg" alt="Icon valid" />}
      </div>
      <div className={style.item_cell}>
        <span>{maintenance}</span>
      </div>
      <div className={style.item_cell}>
        {!service && <img src="/assets/invalid.svg" alt="Icon valid" />}
        {service && <span>{service}</span>}
      </div>
    </div>
  );
};

export default CarouselItem;

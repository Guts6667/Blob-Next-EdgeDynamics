import styles from "./Market.module.scss";
export default function Market() {
  const data = [
    {
      id: 1,
      strong: "The industrial IloTmarkets",
      content:
        "is projected to reach USD 106.1 billion by 2026; It is expected to record a CAGR of 6.7% during the forecast period.",
    },
    {
      id: 2,
      strong: "Support from governments ",
      content:
        "of different countries for R&D activites related to standardization of IPv6 and increased use of cloud computing platforms are expected to drive the global IIoT market.",
    },
    {
      id: 3,
      strong: "The market’s growth ",
      content:
        "can also be attributed to the rapid adopation of Artifical Intelligence (AI) and Internet of Things (IoT) in manufacturing sector.",
    },
  ];
  return (
    <section className={styles.container__market}>
      <div className={styles.container__market_title}>
        <span className="section_title">Products & Service</span>
        <h2>MARKET</h2>
        <p>
          Market growth can be attributed to significant improvement in audience
          engagement and demand for data-driven decisions and operations.
        </p>
      </div>
      <div className={styles.container__market_content}>
        {data.map((item) => (
          <div key={item.id} className={styles.market_card}>
            <strong>{item.strong}</strong>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <div className={styles.container__market_content_estimations}>
        <div className={styles.market_card}>
          <p>2021 estimated</p>
          <strong>76.7 USD Billions</strong>
        </div>
        <div className={styles.market_card}>
          <p>2026 projected</p>
          <strong>106.1 USD Billions</strong>
        </div>
      </div>
    </section>
  );
}

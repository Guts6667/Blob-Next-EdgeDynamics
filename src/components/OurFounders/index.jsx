import style from "./OurFounder.module.scss";
export default function OurFounders() {
  const founders = [
    {
      id: "23DSG",
      firstName: "Mokhliss",
      lastName: "Barriol",
      role: "CIO & Co-Founder",
      country: "France",
      company: "",
      picture: "mokhliss.",
    },
    {
      id: "23DSGgfdsg",
      firstName: "Khadar",
      lastName: "Hassan",
      role: "CEO & Founder",
      country: "The Netherlands",
      company: "",
      picture: "placeholder1.avif",
    },
    {
      id: "23DSGgfds643Rg",
      firstName: "Ahmed",
      lastName: "Hassan",
      role: "CTO & Co-Founder",
      country: "The Netherlands",
      company: "",
      picture: "placeholder1.avif",
    },
    {
      id: "76543df",
      firstName: "Wei",
      lastName: "Yang",
      role: "Technical Advisor, Project Excellence Manager",
      country: "",
      company: "Shell PLC",
      picture: "placeholder1.avif",
    },
    {
      id: "87JYTHG56",
      firstName: "Bjorn",
      lastName: "van den Brule",
      role: "Advisor, Engagement Manager",
      country: "The Netherlands",
      company: "Ministry of Infrastructure and Water Management",
      picture: "placeholder1.avif",
    },
  ];
  return (
    <section className={style.container__ourFounders}>
      <div className={style.container__ourFounders_title}>
        <span className="section_title">About us</span>
        <h2>OUR FOUNDERS</h2>
      </div>
      <div className={style.container__ourFounders_content}>
        {founders.map((element) => {
          return (
            <article
              key={`${element.id}-${element.lastName}`}
              className={style.card__founder}
            >
              <div className={style.card__founder_img}>
                <img
                  src={`/assets/${element.picture}`}
                  alt={`${element.firstName} ${element.lastName}`}
                />
              </div>
              <div className={style.card__founder_text}>
                <h3>{`${element.firstName} ${element.lastName}`}</h3>
                <span>{`${element.role}, ${
                  element.company ? element.company : ""
                } ${element.country} `}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

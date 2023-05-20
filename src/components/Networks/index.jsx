import styles from "./Networks.module.scss";
import Image from "next/image";

export default function Networks() {
  const networks = [
    {
      name: "twitter",
      src: "/twitter.svg",
      link: "https://twitter.com/edgefactory_",
    },
    {
      name: "discord",
      src: "/discord.svg",
      link: "https://discord.gg/edgefactory",
    },
    {
      name: "telegram",
      src: "/telegram.svg",
      link: "https://t.me/edgefactory",
    },
  ];
  return (
    <div className={styles.container__network}>
      {networks.map((network) => {
        return (
          <a
            key={network.name}
            href={network.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`/assets${network.src}`}
              alt={network.name}
              width={25}
              height={25}
            />
          </a>
        );
      })}
    </div>
  );
}

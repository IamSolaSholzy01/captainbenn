import Image from "next/image";
import { NextComponentType } from "next";
import useMediaQuery from "../hooks/useMediaQuery";
import styles from "../styles/FooterLogo.module.css";

const FooterLogo: NextComponentType = () => {
  return (
    <div className={styles.logo}>
      <Image alt={"logo"} src={"/images/hero.png"} height={160} width={160} />
      <p>Best Football Experience you can get</p>
    </div>
  );
};

export default FooterLogo;

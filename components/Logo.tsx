import Image from "next/image";
import { NextComponentType } from "next";
import useMediaQuery from "../hooks/useMediaQuery";
import styles from "../styles/Logo.module.css";

const Logo: NextComponentType = () => {
  const mobile = useMediaQuery("(min-width: 768px)");
  return (
    <div className={styles.logo}>
      <Image
        alt={"logo"}
        src={!mobile ? "/images/hero.webp" : "/images/hero-mobile.webp"}
        height={200}
        width={200}
      />
    </div>
  );
};

export default Logo;

import { NextComponentType } from "next";
import styles from "../styles/HomeButton.module.css";

const HomeButton: NextComponentType = () => (
  <button className={styles.button}>Get Started</button>
);

export { HomeButton };

import React from "react";
import { NextComponentType } from "next";
import styles from "../styles/HomeButton.module.css";

const HomeButton: NextComponentType = () => (
  <button className={styles.button + " absolute"}>Get Started</button>
);

const PrimaryButton: ({ text }: { text: string }) => JSX.Element = ({
  text,
}) => <button className={styles.button}>{text}</button>;

export { HomeButton, PrimaryButton };

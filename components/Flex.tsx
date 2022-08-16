import React, { ReactNode } from "react";
import styles from "../styles/Flex.module.css";

const Flex: ({
  children,
  direction,
  className,
  justifyContent,
  alignItems,
}: {
  children: ReactNode;
  direction: "row" | "column";
  className?: string;
  justifyContent?: "between" | "center" | "start" | "around" | "end";
  alignItems?: "center" | "start" | "end";
}) => JSX.Element = ({
  children,
  direction,
  className,
  justifyContent,
  alignItems,
}) => {
  let overallClass = styles.flex;
  overallClass += className ? " " + className : "";
  overallClass += direction === "row" ? " " + styles.row : " " + styles.column;
  switch (justifyContent) {
    case "around":
      overallClass += " " + styles.around;
      break;
    case "between":
      overallClass += " " + styles.between;
      break;
    case "center":
      overallClass += " " + styles.center;
      break;
    case "end":
      overallClass += " " + styles.end;
      break;
    case "start":
      overallClass += " " + styles.start;
      break;
    default:
      overallClass += " " + styles.start;
      break;
  }
  switch (alignItems) {
    case "center":
      overallClass += " " + styles.alignCenter;
      break;
    case "end":
      overallClass += " " + styles.alignEnd;
      break;
    case "start":
      overallClass += " " + styles.alignStart;
      break;
    default:
      overallClass += " " + styles.alignStart;
      break;
  }
  return <div className={overallClass}>{children}</div>;
};

export default Flex;

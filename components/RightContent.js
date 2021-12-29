import React from "react";
import styles from "../styles/RightContent.module.css";

const RightContent = ({ children }) => {
  return (
    <div className={styles.content}>
      <main className="mt-3 p-3"> {children} </main>
    </div>
  );
};

export default RightContent;

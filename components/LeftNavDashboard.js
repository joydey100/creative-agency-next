import Link from "next/link";
import React, { Children } from "react";
import logo from "../public/logos/logo.png";
import styles from "../styles/LeftNavbar.module.css";

const LeftNavDashboard = ({ children }) => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <img src={logo.src} alt="creative agency" />{" "}
          </a>
        </Link>
      </div>

      <div className={styles.menu_bar}>
        <Link href="/"> Home </Link>
        <Link href="/dashboard"> My Order </Link>
        <Link href="/dashboard/add-review"> Add review </Link>
      </div>
    </nav>
  );
};

export default LeftNavDashboard;

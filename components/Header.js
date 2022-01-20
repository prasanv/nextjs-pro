import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function Header() {
  return (
    <div>
      <Link href="/" passHref>
        <h2 className={styles.header}>
          <a>NextJS Pro</a>
        </h2>
      </Link>
    </div>
  );
}

export default Header;

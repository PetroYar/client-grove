"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import useWindowSize from "../../hooks/useWindowSize";
import { useState } from "react";

const Header = (props) => {
  const { width } = useWindowSize();
  const [showBurger, setShowBurger] = useState(false);

  const mobile = 540;
  
  const toggleBurger = () => {
    setShowBurger((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {width < mobile && (
          <div className={styles.img}>
            <Link href={"/"}>
              <img src="/logo.png" alt="logo" />
            </Link>
          </div>
        )}
        <nav className={!showBurger ? styles.active : ""}>
          <ul
            className={`${
              !showBurger ? "" : styles.animateUl
            }`}
          ><li>
              <Link href={"/"}>головна</Link>
            </li>
            <li>
              <Link href={"/menu"}>меню</Link>
            </li>
           
            {width > mobile && (
              <li className={styles.img}>
                <Link href={"/"}>
                  <img src="/logo.png" alt="logo" />
                </Link>
              </li>
            )}
            <li>
              <Link href={"/about"}>про нас</Link>
            </li>
             <li>
              <Link href={"/galery"}>галерея</Link>
            </li>
          </ul>
        </nav>
        {width < mobile && (
          <button
            onClick={toggleBurger}
            className={`${styles.burger} ${showBurger ? styles.open : ""}`}
          >
            <span className={styles.span}></span>

            <span className={styles.animate}></span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

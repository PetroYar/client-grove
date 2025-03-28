"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import useWindowSize from "../../hooks/useWindowSize";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const Header = (props) => {
  const { width } = useWindowSize();
  const [showBurger, setShowBurger] = useState(false);
const {user} = useAuth()
  const mobile = 540;

  const toggleBurger = () => {
    setShowBurger((prev) => !prev);
    if (!showBurger) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  };
  const handleLinkClick = () => {
    setShowBurger(false); 
    document.body.style.overflowY = "auto"; 
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {width < mobile && (
          <div onClick={handleLinkClick} className={styles.img}>
            <Link href={"/"}>
              <img src="/logo.png" alt="logo" />
            </Link>
          </div>
        )}
        <nav className={!showBurger ? styles.active : ""}>
          <ul className={`${!showBurger ? "" : styles.animateUl}`}>
            <li onClick={handleLinkClick}>
              <Link href={"/"}>головна</Link>
            </li>
            <li onClick={handleLinkClick}>
              <Link href={"/menu"}>меню</Link>
            </li>

            {width > mobile && (
              <li className={styles.img}>
                <Link href={"/"}>
                  <img src="/logo.png" alt="logo" />
                </Link>
              </li>
            )}
            <li onClick={handleLinkClick}>
              <Link href={"/about"} onClick={handleLinkClick}>
                про нас
              </Link>
            </li>
            <li onClick={handleLinkClick}>
              <Link href={"/gallery"}>галерея</Link>
            </li>
            <li onClick={handleLinkClick}>
              {user?.username}
              <Link href={"/login"}>login</Link>
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

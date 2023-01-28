import Image from "next/Image";
import hammy from "@/public/icons/menu-icon.png";
import { useState } from "react";
import menubg from "@/public/background-images/menuBackground.png";
import styles from "@/components/Menu/Menu.module.css";

export default function Menu() {
  const [isActive, setIsActive] = useState(true);
  console.log(isActive);

  if (!isActive == true) {
    return (
      <>
        <div className={styles.menu}>
          <div className={styles.menu__bgwrap}>
            <Image src={menubg} className={styles.menu__bg} />
          </div>
          <div className={styles.menu__textwrap}>
            <div className={styles.menu__textexit}>
              <h1
                className={styles.menu__exittext}
                onClick={() => setIsActive(!isActive)}>
            x</h1>
            </div>
            <div className={styles.menu__menutext}>
              <ul className={styles.menu__menutext__list}>
                <a href="http://localhost:3000/">
                  <li>Home</li>
                </a>
                <a href="http://localhost:3000/about">
                  <li>About</li>
                </a>
                <a href="http://localhost:3000/contact">
                  <li>Contact</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Image
          src={hammy}
          style={{ width: "70px", height: "55px", cursor: "pointer" }}
          onClick={() => setIsActive(!isActive)}
        />
      </>
    );
  }
}

import { useEffect } from "react";

import styles from "./styles/AboutPage.module.css";
import {GitIcon, LinkedinIcon} from "../svg";

import myPic from "/assets/me_photo.png";

export const AboutPage = () => {
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#0F0115";

    return () => {
      document.documentElement.style.backgroundColor = "";
    };
  }, []);
  return (
    <main className={styles.mainAbout}>
      <section className={styles.leftCont}>
        <p className={styles.leftPar}>
          Juan Chacón (Leon) 26 years old. <br /> <br /> Graphic Designer, and
          Web developer. <br />
          <br />
          Creative, lidership, teamwork, adaptable <br />
          <br /> More a cat person, but dogs aren't bad either.
        </p>
      </section>
      <section className={styles.centerCont}>
        <img src={ myPic } alt="" />
      </section>
      <section className={styles.rightCont}>
        <p className={styles.rightPar}>
          Interested in work with me, just reach me out by: <br />
          <br />
          jch.lion97@gmail.com +57 3163206816
        </p>
      </section>
      <aside className={ styles.iconSection }>
        <button className={styles.iconLinks}>
          <LinkedinIcon className={styles.linkedinButton} />
        </button>
        <button className={styles.iconLinks}>
          <GitIcon className={styles.gitButton} />
        </button>
      </aside>
    </main>
  );
};

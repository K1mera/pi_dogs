import { Link } from "react-router-dom";

import styles from "./styles/LandingPage.module.css";
import dogImage from '/assets/dog_landing.png';

export const LandingPage = () => {
  return (
    <main className={styles.landingLayout}>
      <section className={styles.landingItems}>
        <img
          className={styles.dogLandingImg}
          src={ dogImage }
          alt="dog_logo"
        />
        <h1>Dogctionary</h1>

        <Link to="/home" className={styles.toHome}>
          Enter
        </Link>
      </section>
    </main>
  );
};

import React from 'react';
import styles from "./About.module.css";


const About = () => {
  return (
    <section className={styles.HomePage_sectionP1__kiHi} id={styles.HomePage_about__KBFWW}>
      <div className={styles.HomePage_firstDiv__2J3gv}>
        <div className={styles.HomePage_frstDiv1}>
          <h1>About</h1>
          <p>Gem Garden is More Than Just Gliding</p>
          <p>
            Our Company is an exclusive supplier of jewelry from the world's
            best brands. We take pride in offering our customers only the
            highest quality products created from precious metals and stones by
            the most experienced master jewelers
          </p>
          <p>
            We are constantly expanding our range to meet the needs of our
            customers and offer them the latest and most fashionable trends in
            jewelry. We are confident that our collection of jewelry will allow
            everyone to express their individual style and create a unique image
          </p>
          <span>OUR STORES</span>
        </div>
        <div className={styles.HomePage_frstDiv2}>
          <span>GG</span>
        </div>
      </div>
      <div className={styles.HomePage_secondDiv__lALhm } classname={styles.HomePage_sectionM1__mmrYJ}>
        <div className={styles.divimge}>
          <img
            src="https://gem-garden-jewelry-store.vercel.app/static/media/meeting.c96f8779b2d55da20832.png"
            alt="Meeting img"
          />
        </div>
        <div>
          <h1>Arrange a Meeting with Personal Consultant</h1>
          <p>Find a Boutique Near You or Visit our Flagship Store</p>
          <span className={styles.spantag}>LEARN MORE</span>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from "react";
import styles from "../style/Footer.module.css";
import fbicon from "../Pics/icons8-facebook-48.png"
import twittericon from "../Pics/icons8-twitter-50.png"
import instaicon from "../Pics/icons8-instagram-48.png"
const Footer = () => {
  return (
    <div className={styles.foot_footerComponent__BtWvP}>
      <div className={styles.foot_app_Title__zA_uX}>
        <h2>GEM GARDEN</h2>
        <div className={styles.foot_social_media_Div__djhh7}>
          <a href="https://www.facebook.com">
          <img src={fbicon} style={{width:"30px"}}/>
          </a>
          <a href="https://www.twitter.com/">
          <img src={twittericon}  style={{width:"30px"}}/>
          </a>
          <a href="https://www.instagram.com/">
          <img src={instaicon}  style={{width:"30px"}}/>
           </a>
        </div>
      </div>
      <div className={styles.foot_contacts__yLyoe}>
        <p>Contact Us</p>
        <p>Services</p>
        <p>Return</p>
        <p>Term of use</p>
        <p>How to order?</p>
      </div>
      <div className={styles.foot_jewelry_Type__p6DGh}>
        <p>Rings</p>
        <p>Bracelets</p>
        <p>Earrings</p>
        <p>Necklaces & Pendants</p>
        <p>Watches</p>
      </div>
      <div className={styles.foot_email_Section__qc_3a}>
        <h1 style={{color:"white",fontWeight:"500"}}>Discover the latest collections, news, and exclusive launches</h1>
        <input
          className={styles.foot_mailInput__9Ia1}
          type="email"
          placeholder="Enter your e-mail address"
        />
        <hr />
        <div className={styles.foot_policy__FkJCy}>
          <p>Legal notice</p>
          <p>Privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

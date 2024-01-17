import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.foot_footerComponent__BtWvP}>
      <div className={styles.foot_app_Title__zA_uX}>
        <h2>GEM GARDEN</h2>
        <div className={styles.foot_social_media_Div__djhh7}>
          <a href="https://www.facebook.com/hacked"><img className={styles.foot_social_media__hGU5z} src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png" title="facebook" alt="Facebook"/></a> 
          <img className={styles.foot_social_media__hGU5z} src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png" title="Instagram" alt="Instagram"/>
          <img className={styles.foot_social_media__hGU5z} src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Pinterest2_svg-512.png" title="Pinterest" alt="Pinterest"/>
          <img className={styles.foot_social_media__hGU5z} src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png" title="Twitter" alt="Twitter"/>
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
        <h1>Discover the latest collections, news, and exclusive launches</h1>
        <input className={styles.foot_mailInput__9Ia1} type="email" placeholder="Enter your e-mail address" />
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


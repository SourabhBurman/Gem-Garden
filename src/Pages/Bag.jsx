import React from 'react'
import { Container } from '@chakra-ui/react'
import { Modal } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from '../style/bagpage.module.css'

export const Bag = () => {
  const userId = localStorage.getItem("userId")
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();
  const [amt, setAmt] = useState(0);
  const [payment, setPayment] = useState('');
  const [cartEmpty, setCartEmpty] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div>


        {/* =================================================== */}
        {/* left section sholuld be here only  */}
        {/* ===================================================================== */}


        <div className={styles.cardandPayment}>
          {/* Content for the right section */}

          <div>
            <h3 className={styles.cardgiftHeading}>Gifting & Personalisation</h3>
            <div className={styles.giftcard}>
              <img src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp" alt="" />
              <div className={styles.giftHeading}>
                <h4 style={{ fontWeight: "bold" }}>Is this a gift for someone special?</h4>
                <div>Add gift wrapping  on the card, only for ₹50</div>
                <button className={styles.gitfbutton}>WRAP IT</button>
              </div>
            </div>
          </div>

          <div className={styles.paymentCard}>
            <h3 style={{fontWeight:"bold"}}>Price Details</h3>
            <div className={styles.details}>
              <div>Subtotal</div>
              <div>₹{amt}</div>
            </div>
            <div className={styles.details}>
              <div>Tax Rate</div>
              <div>{(amt > 0) ? 1 : 0}%</div>
            </div>
            <div className={styles.details}>
              <div>Tax</div>
              <div>₹{(amt * 1 / 100).toFixed(2)}</div>
            </div>
            <div className={styles.details}>
              <div>Discount on Subtotal</div>
              <div>₹{(amt * (discount) / 100).toFixed(2)}</div>
            </div>
            <div className={styles.details}>
              <div>Convinience Fee</div>
              <div>₹ {(amt > 0) ? 99 : 0}</div>
            </div>
            <hr />
            <div className={styles.details}>
              <div>Total Amount</div>
              <div>₹{(amt > 0) ? (amt + (amt * 1 / 100) + 99 - (amt * (discount) / 100)).toFixed(2) : 0} </div>
            </div>
            <div >
              <button className={styles.gitfbutton} disabled={(amt <= 0)}>PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}



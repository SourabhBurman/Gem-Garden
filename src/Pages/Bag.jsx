import React from 'react'
import { Container } from '@chakra-ui/react'
import { Modal } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from '../style/bagpage.module.css'

// dummy data 
const dummydata = [

  {
    "id": 2,
    "name": "Jewelry",
    "price": 3599,
    "about": "Nova Ring",
    "category": "Rings",
    "brand": "Cartier",
    "rating": 4.1,
    "avatar": "https://www.cleanorigin.com/media/catalog/product/cache/02fb1a9963ef97a70391d5c2f7947df3/3/1/31-cg11106erw-e.00-w_1_fmdubojhl4wbaqd5.jpg"
  },
  {
    "id": 3,
    "name": "Jewelry",
    "price": 9091,
    "about": "Sylvie Ring",
    "category": "Rings",
    "brand": "Grrard",
    "rating": 5.2,
    "avatar": "https://www.cleanorigin.com/media/catalog/product/cache/02fb1a9963ef97a70391d5c2f7947df3/s/6/s61-e-14ky-rd2.jpeg"
  },
  {
    "id": 4,
    "name": "Jewelry",
    "price": 6099,
    "about": "Deanna Ring",
    "category": "Rings",
    "brand": "David Yurman",
    "rating": 6.4,
    "avatar": "https://www.cleanorigin.com/media/catalog/product/cache/02fb1a9963ef97a70391d5c2f7947df3/e/r/ersl0318-ov_yg_1.jpg"
  }
]


export const Bag = () => {
  const userId = localStorage.getItem("userId")
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();
  const [amt, setAmt] = useState(0);
  const [payment, setPayment] = useState('');
  const [cartEmpty, setCartEmpty] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.cartandpaymentbox}>
      <div className={styles.firstbox}>
        {dummydata && dummydata.map((temp) => (
          <div className={styles.cartbox}>
            <img className={styles.cartImage} src={temp.avatar} alt="" />
            <div className={styles.cartdetails}>
              <strong>{temp.brand}</strong>
              <p>{temp.about}</p>
              <p>Rs : {temp.price}</p>
              <button>Remove</button>
            </div>
          </div>

        ))}
      </div>
      {/* =================================================== */}
      {/* left section sholuld be here only  */}
      {/* ===================================================================== */}

      <div>
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
            <h3 style={{ fontWeight: "bold" }}>Price Details</h3>
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



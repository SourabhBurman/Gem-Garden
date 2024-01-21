import React, { useEffect } from 'react'
import { Container, useDisclosure } from '@chakra-ui/react'
import { Modal } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from '../style/bagpage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_CART } from '../Store/actiontype';

export const Bag = () => {
  const userId = localStorage.getItem("userId")
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();
  const [amt, setAmt] = useState(0);
  const [payment, setPayment] = useState('');
  const [cartEmpty, setCartEmpty] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
const dispatch = useDispatch();

  const {cartArray} = useSelector(st=>st);
// console.log(cartArray);
useEffect(()=> {
setAmt(cartArray.reduce((acc,curr)=> {
  return acc+curr.price
},0))
},[cartArray])
  return (
    <div className={styles.cartandpaymentbox}>
      {/* <div className={styles.firstbox}>
        {cartArray.length!=0 ? cartArray.map((temp) => (
          <div className={styles.cartbox}>
            <img className={styles.cartImage} src={temp.avatar} alt="" />
            <div className={styles.cartdetails}>
              <strong style={{textAlign:"left"}}>Name : {temp.brand}</strong>
              <p>About : {temp.about}</p>
              <p>Price : ${temp.price}</p>
              <button className={styles.buttonsEffect} onClick={()=>dispatch({type:DELETE_CART,payload:temp})}>Remove</button>
            </div>
          </div>

        )) : <h1 style={{fontSize:"50px"}}>Cart is Empty</h1>}
      </div>
  
      <div>
        <div className={styles.cardandPayment}>
 

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
      </div> */}

    </div>
  )
}



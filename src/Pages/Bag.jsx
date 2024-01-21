import React from 'react'
import { Container } from '@chakra-ui/react'
import { Modal } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import styles from '../style/bagpage.module.css'
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_CART } from '../Store/actiontype';




export const Bag = () => {
  const [discount, setDiscount] = useState(0);
  const [amt, setAmt] = useState(0);
  const [bagData, setBagData] = useState([]);
  const [address, setaddress] = useState(false);
  const [setpayment, setShowPaymentForm] = useState(false);
  const [card, setcard] = useState(false);
  const [modal, setModal] = useState(false);
const {cartArray} = useSelector(store=>store);
const dispatch = useDispatch();
console.log(address)
  function placeOrder() {
    console.log("clicled")
    setaddress(true)
  }
  const cardpaymentoption = (e) => {
    e.preventDefault();
    setcard(true);
  }

  let length = 0;
  useEffect(() => {
    // const storedBagData = JSON.parse(localStorage.getItem("bag")) || [];
    // console.log("Number of objects in bag:", storedBagData.length);
    // setAmt(storedBagData.length)
    // setBagData(storedBagData);
  }, []);
  // console.log(length);
  const removeFromBag = (productId) => {
    const updatedBag = bagData.filter((product) => product.id !== productId);
    setBagData(updatedBag);
    localStorage.setItem("bag", JSON.stringify(updatedBag));
  };

  const subtotal = bagData.reduce((total, product) => total + product.price, 0);
  const taxRate = 0.02;
  const tax = subtotal * taxRate;

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    alert("Please complete your payment")
    setShowPaymentForm(true);
  };


  // const handlePaymentSubmit = (e) => {
  //   e.preventDefault()
  //   setTimeout(function () {
  //     alert("Payment Successfull ");
  //   }, 2000);
  //   setTimeout(function () {
  //     alert("Order Successfull");
  //   }, 5000);
  // }

  // const paymentSuccessMessage = (e) => {
  //   e.preventDefault()
  //   // Simulate a payment process (replace with your actual payment logic)
  //   // For demonstration purposes, showing the alert after a delay
  //   setTimeout(() => {
  //     setShowAlert(true);
  //   }, 1000);
  // };
  // function paymentSuccessMessage2(e){
  //   e.preventDefault()
  //   setShowAlert(false);
  // }
  const toggleModal = (e) => {
    e.preventDefault()
    setTimeout(() => {
      setModal(true);
    }, 1000)

  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  return (
    <>
      <div className={styles.cartandpaymentbox}>
        <div className={styles.firstbox}>
          {cartArray.length === 0 ? (<p style={{ fontWeight: "bold", marginTop: "20px" }}>Your cart is empty.</p>) : (cartArray.map((temp) => (
            <div key={temp.id} className={styles.cartbox}>
              <img className={styles.cartImage} src={temp.avatar} alt="" />
              <div className={styles.cartdetails}>
                <strong style={{ marginLeft: "-115px" }}>{temp.brand}</strong>
                <p>{temp.about}</p>
                <p>Rs : {temp.price}</p>
                <button className={styles.removeButton} onClick={() =>{dispatch({type:DELETE_CART,payload:temp})} }> <strong style={{ color: "white" }}>X</strong></button>
              </div>
            </div>
          ))
          )
          }
        </div>

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
                <div>₹{subtotal}</div>
              </div>
              <div className={styles.details}>
                <div>Tax Rate</div>
                <div>{(taxRate * 100).toFixed(2)}%</div>
              </div>
              <div className={styles.details}>
                <div>Tax</div>
                <div>₹{tax.toFixed(2)}</div>
              </div>
              {/* Other details... */}
              <hr />
              <div className={styles.details}>
                <div>Total Amount</div>
                <div>₹{cartArray.reduce((acc,curr)=>{
                  return acc+curr.price
                },0)}</div>
              </div>
              <div>
                <button onClick={()=>setaddress(!address)} className={styles.gitfbutton} disabled={cartArray.length <= 0}>
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  shipping address */}
      <div style={addresspaymentbhai}>
        {address && <div style={formContainerStyle}>
          <h2 style={headingStyle}>Shipping Address</h2>
          <form onSubmit={cardpaymentoption} >
            <div style={formRowStyle}>
              <div style={formGroupStyle}>
                <label htmlFor="firstName" style={labelStyle}>
                  Full Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  required
                  style={inputStyle}
                />
              </div>

              <div style={formGroupStyle}>
                <label htmlFor="landmark" style={labelStyle}>
                  Landmark <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="landmark"
                  placeholder="Enter a landmark"
                  required
                  style={inputStyle}
                />
              </div>
              <div style={formGroupStyle}>
                <label htmlFor="city" style={labelStyle}>
                  City <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter your city"
                  required
                  style={inputStyle}
                />
              </div>
              <div style={formGroupStyle}>
                <label htmlFor="state" style={labelStyle}>
                  State <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="state"
                  placeholder="Enter your state"
                  required
                  style={inputStyle}
                />
              </div>
              <div style={formGroupStyle}>
                <label htmlFor="pinCode" style={labelStyle}>
                  Pin Code <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="number"
                  id="pinCode"
                  placeholder="Enter your pin code"
                  required
                  style={inputStyle}
                />
              </div>
            </div>
            <button type="submit" style={{ ...buttonStyle }}>
              Submit
            </button>
          </form>
        </div>}

        {/* payment card debit/credit */}
        {card &&
          <div style={formContainerStyle}> <form onSubmit={(e)=>{
            e.preventDefault();
            setModal(true);
          } }>
            <div style={formGroupStyle}>
              <label htmlFor="amount" style={labelStyle}>
                Amount <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={cartArray.reduce((acc,curr)=>{
                  return acc+curr.price
                },0)}
                placeholder=" Enter Amount"
                required
                style={inputStyle}

              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="cardNumber" style={labelStyle}>
                Card Number <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                id="cardNumber"
                name="cardNumber"
                placeholder="Enter your card number"
                required
                style={inputStyle}
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="cardHolder" style={labelStyle}>
                Card Holder <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="cardHolder"
                name="cardHolder"
                placeholder="Enter the cardholder's name"
                required
                style={inputStyle}
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="expiryDate" style={labelStyle}>
                Expiry Date <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                required
                style={inputStyle}
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="cvc" style={labelStyle}>
                CVV <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                id="cvc"
                name="cvc"
                placeholder="Enter the security code"
                required
                style={inputStyle}
              />
            </div>
            <button type="submit" className={styles.modalbtn} >
              Pay Now
            </button>
            {modal && (

              <div className={styles.modal}>
                <div onClick={toggleModal} className={styles.overlay}></div>
                <div className={styles.modalContent}>
                  <Alert
                    status='success'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='200px'
                  >
                    <AlertIcon boxSize='40px' mr={0} color='green.500' />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                      Payment Succesful
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                      Thank you for payment, Visit again!
                    </AlertDescription>
                  </Alert>

                  <button className={styles.modalClose} onClick={toggleModal}>
                    <Link to="/">X</Link>
                  </button>
                </div>
              </div>
            )}
          </form>
          </div>
        }
      </div>
    </>
  );
};
const addresspaymentbhai = {
  // border:"2px solid red",
  width: "80%",
  margin: "auto",
  display: "flex",
}
const formContainerStyle = {
  maxWidth: "600px",
  minWidth: "400px",
  margin: "20px auto",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  // backgroundColor: "#fff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  background: "linear-gradient(to top, #dfe9f3 0%, white 100%)"
};

const headingStyle = {
  fontSize: "1.8em",
  marginBottom: "20px",
  color: "#333",
};
const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontSize: "16px",
  color: "#333",
  textAlign: "start",
  fontWeight: "bold",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  boxSizing: "border-box",
  border: "1px solid #ddd",
  borderRadius: "4px",
  fontSize: "14px",
};

const buttonStyle = {
  display: "block",
  width: "40%",
  padding: "12px",
  boxSizing: "border-box",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "black",
  color: "#fff",
  fontSize: "16px",
  cursor: "pointer",
  margin: "auto",
};


const formRowStyle = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: "20px",
};

const formGroupStyle = {
  flex: "1 1 calc(50% - 10px)",
  marginBottom: "20px",
};







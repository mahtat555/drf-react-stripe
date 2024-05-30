import { useState } from "react";
import { Card } from "react-bootstrap"

import Stripe from "./Stripe"
import PayPalBtn from "./PayPalBtn"
import BasicNavbar from "./BasicNavbar"

const PaymentMethod = () => {

  const [paymentChoice, setPaymentChoice] = useState("stripe")

  const handlePaymentMethodChange = (event) => {
    setPaymentChoice(event.target.value);
  };

  return (
    <>
      <BasicNavbar />
      <Card border="light" className="text-center" style={{ marginTop: "30px" }}>
        <Card.Body>
          <Card.Title>Payment</Card.Title>
          <Card.Body>
            <div className="payment-options">
              <div className="payment-options-paypal">
                <input
                  type="radio"
                  id="ch-paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentChoice === 'paypal'}
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="ch-paypal">PayPal</label>
              </div>
              <div className="payment-options-stripe">
                <input
                  type="radio"
                  id="ch-stripe"
                  name="paymentMethod"
                  value="stripe"
                  checked={paymentChoice === 'stripe'}
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="ch-stripe">Stripe</label>
              </div>
            </div>
          </Card.Body>
        </Card.Body>
      </Card>

      {
        paymentChoice == "paypal" && (
          <Card border="light" className="text-center" style={{ marginTop: "30px", width: "30%", margin: "auto" }}>
            <Card.Body>
              <PayPalBtn />
            </Card.Body>
          </Card>
        )
      }
      {
        paymentChoice == "stripe" && (
          <Card border="light" className="text-center" style={{ marginTop: "30px", width: "40%", margin: "auto" }}>
            <Card.Body>
              <Stripe />
            </Card.Body>
          </Card>
        )
      }

    </>
  )
}

export default PaymentMethod

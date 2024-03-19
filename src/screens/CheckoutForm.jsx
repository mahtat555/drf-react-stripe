import { Button } from "react-bootstrap"
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

import { doPayment } from "../actions/payments"

const options = {
  style: {
    base: {
      color: "blue",
      fontSize: "16px",
      fontWeight: "500",
      border: "2px solid #00f",
      borderRadius: "8px",
    },
  },
}


const CheckoutForm = () => {

  const stripe = useStripe();
  const elements = useElements();

  /** Handling the payment */
  const handlePay = async (event) => {
    event.preventDefault()
    doPayment({ CardElement, stripe, elements })
  }

  const canPay = () => {
    return stripe
  }

  return (
    <>
      <div style={{ width: "50%", paddingTop: "40px", margin: "auto" }}>
        <CardElement options={options} className="card-element" />
      </div>

      {
        <Button
          variant="primary"
          style={{ width: "160px", marginLeft: "10px" }}
          onClick={handlePay}
          disabled={!canPay()}
        >
          Pay
        </Button>
      }
    </>
  )
}

export default CheckoutForm

import { Card } from "react-bootstrap"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from "./CheckoutForm"


const stripe_key = process.env.REACT_APP_STRIPE_PK_KEY
const stripePromise = loadStripe(stripe_key)


const PaymentMethod = () => {

  return (
    <Card border="light" className="text-center" style={{ marginTop: "30px" }}>
      <Card.Body>
        <Card.Title>Payment Method</Card.Title>

        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>

      </Card.Body>
    </Card>
  )
}

export default PaymentMethod

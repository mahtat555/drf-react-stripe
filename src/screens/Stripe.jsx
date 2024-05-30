import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from "./CheckoutForm"
import PaymentAddress from "../components/Payments/PaymentAddress"


const stripe_key = process.env.REACT_APP_STRIPE_PK_KEY
const stripePromise = loadStripe(stripe_key)


const Stripe = () => {

  const [useNewAddress, setUseNewAddress] = useState(false)
  const [address, setAddress] = useState({
    email: "", name: "", phone: "", country: "", state: "", city: "", line1: "", line2: "",
    postalCode: "",
  })

  return (
    <>
      <div>
        <div>
          <input
            type="checkbox"
            id="address"
            checked={useNewAddress}
            onChange={(event) => { setUseNewAddress(event.target.checked) }}
          />
          <label htmlFor="address" style={{ marginLeft: "10px" }}>Use different address</label>
        </div>
      </div>
      {useNewAddress && <PaymentAddress address={address} setAddress={setAddress} />}
      <Elements stripe={stripePromise}>
        <>
          {/* <Testing /> */}
          <CheckoutForm />
        </>
      </Elements>
    </>
  )
}

export default Stripe

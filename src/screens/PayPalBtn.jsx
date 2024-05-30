import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const initialOptions = {
  clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
  currency: "USD",
  intent: "capture",
  components: "buttons"
};

const PayPalBtn = () => {

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        // Styles
        style={{ layout: "horizontal" }}

        // Create order
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "10.00",
                },
              },
            ],
          });
        }}

        // Handle the backend
        onApprove={(data, actions) => {
          return actions.order.capture().then(function (details) {
            alert("Payment completed. Thank you!");
          });
        }}

        // Handle the error
        onError={(error) => {
          alert("There was an error with the payment. Try again!")
        }}

        // Handle the cancel
        onCancel={() => {
          alert("You cancelled the payment.")
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalBtn;

import requests from "../common/requests"


// export const doPayment = async ({ CardElement, elements, stripe }) => {
//   try {
//     const cardElement = elements.getElement(CardElement);
//     const { token, error } = await stripe.createToken(cardElement);

//     const endpoint = "http://localhost:8000/api/invoices/payments/1/payment/"
//     const authorization = ""

//     const data = { token: token.id }
//     const params = {}
//     const headers = {
//         "Authorization": `Bearer ${authorization}`
//     }

//     const response = await requests.post(endpoint, data, params, headers)
//     console.log(response.data)
//     return { error: null, subscription: true, data: response.data }
//   } catch (error) {
//     const _error = error.response && error.response.data ? error.response.data : error.message;
//     console.log(_error)
//     return { error: _error, subscription: null }
//   }
// }


export const doPayment = async ({ CardElement, elements, stripe }) => {
  try {
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement
    })

    const endpoint = "http://localhost:8000/api/payments/stripe/"
    const authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE3MjQ5NTY2LCJpYXQiOjE3MTIwNjU1NjYsImp0aSI6ImJhNDZjYzFhMDdjNzRkODE5ZTcyZGRmNzExOWJhNDA1IiwidXNlcl9lbWFpbCI6InVtYWh0YXRAZ21haWwuY29tIn0.Le4-jMHf9FbdZRKHbPyLtRYRunG9pEOVeRcoDMCsaJk"

    const billingDetails = paymentMethod.billing_details
    const paymentAddress = billingDetails.address

    const data = {
      "card": {
        "reference": paymentMethod.id,
        "type": paymentMethod.type,
        "brand": paymentMethod.card.brand,
        "exp_month": paymentMethod.card.exp_month,
        "exp_year": paymentMethod.card.exp_year,
        "number": paymentMethod.card.last4,
        "postal_code": paymentAddress.postal_code
      },
      "address": {
        "name": billingDetails.name,
        "email": billingDetails.email,
        "phone": billingDetails.phone,
        "country": paymentAddress.country,
        "state": paymentAddress.state,
        "city": paymentAddress.city,
        "line1": paymentAddress.line1,
        "line2": paymentAddress.line2,
        "postal_code": paymentAddress.postal_code
      }
    }

    const params = {}
    const headers = {
      "Authorization": `Bearer ${authorization}`
    }

    const response = await requests.post(endpoint, data, params, headers)
    await stripe.confirmCardPayment(response.data.client_secret)
    return { error: null, subscription: true, data: response.data }
  } catch (error) {
    const _error = error.response && error.response.data ? error.response.data : error.message;
    console.log(_error)
    return { error: _error, subscription: null }
  }
}

import requests from "../common/requests"


export const doPayment = async ({ CardElement, elements, stripe }) => {
  try {

    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: elements.getElement(CardElement)
    // })
    const cardElement = elements.getElement(CardElement);
    const { token, error } = await stripe.createToken(cardElement);

    console.log("Token", token)
    console.log("Error", error)

    const endpoint = "http://localhost:8000/api/invoices/payments/1/payment/"
    const data = { token: token.id }
    const params = {}
    const headers = {}

    const response = await requests.post(endpoint, data, params, headers)
    console.log(response.data)
    return { error: null, subscription: true, data: response.data }
  } catch (error) {
    const _error = error.response && error.response.data ? error.response.data : error.message;
    console.log(_error)
    return { error: _error, subscription: null }
  }
}

import { Route } from 'react-router-dom'

import Payment from "../../screens/Payment"

const Payments = (
  <>
    {/* Payment home page */}
    <Route path={"/"} element={
      <Payment />
    } >
    </Route>
  </>
)

export default Payments

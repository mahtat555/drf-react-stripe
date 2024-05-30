import { Route } from 'react-router-dom'

import Payment from "../../screens/Payment"

const Payments = (
  <>
    {/* Payment home page */}
    <Route path={"payments/"} element={
      <Payment />
    } >
    </Route>
  </>
)

export default Payments

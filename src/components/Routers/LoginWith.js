import { Route } from 'react-router-dom'

import LoginWithScreen from "../../screens/LoginWithScreen"
import GoogleCallback from "../GoogleCallback"

const LoginWith = (
  <>
    {/* Login with */}
    <Route path={"login/with/"} element={
      <LoginWithScreen />
    } >
    </Route>

    {/* Google callback */}
    <Route path={"social/google/"} element={
      <GoogleCallback />
    } >
    </Route>
  </>
)

export default LoginWith

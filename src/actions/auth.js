import axios from "../common/axios"
import { setTokens, removeTokens } from "../common/authUtils"


const LOGIN_WITH_GOOGLE = "http://localhost:8000/api/accounts/o/google-oauth2/"


export const loginWithGoogle = async ({ code, state }) => {
  const config = {
    params: { code, state },
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  }
  try {
    const { data } = await axios.post(LOGIN_WITH_GOOGLE, {}, config)
    setTokens(data)
    return data
  } catch (error) {
    console.log("Google callback error", error)
  }
}

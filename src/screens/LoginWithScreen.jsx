import React, { useState } from 'react'

import axios from '../common/axios'
import { gen_oauth_provider_uri } from "../common/authUtils"
import BasicNavbar from "./BasicNavbar"


const LoginWithScreen = () => {

  const [error, setError] = useState("")


  const loginWithGoogleUri = gen_oauth_provider_uri("accounts/o/google-oauth2", "social/google")
  const loginWithMicrosoftUri = gen_oauth_provider_uri("accounts/o/azure-oauth2", "social/microsoft")

  const loginWithMicrosoft = async (event) => {
    event.preventDefault()
    try {
      const { data, headers } = await axios.get(loginWithMicrosoftUri)
      window.location.replace(data.authorization_url)
    } catch (error) {
      setError(error)
    }
  }

  const loginWithGoogle = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.get(loginWithGoogleUri)
      console.log(data)
      window.location.replace(data.authorization_url)
    } catch (error) {
      setError(error)
    }
  }

  return (
    <>
      <BasicNavbar />

      {error ? <p className="text-danger">{error}</p> : ""}
      <div className="login-with">
        <button
          className="btn btn-primary microsoft"
          onClick={loginWithMicrosoft}
        >
          <span>Login with Microsoft</span> <i className="fa fa-microsoft"></i>
        </button>

        <button
          className="btn btn-primary google-plus"
          onClick={loginWithGoogle}
        >
          <span>Login  with Google</span> <i className="fa fa-google-plus"></i>
        </button>
      </div>
    </>

  )
}


export default LoginWithScreen

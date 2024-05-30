import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";

import { loginWithGoogle } from '../actions/auth';



function GoogleCallback() {

  const [user, setUser] = useState({})
  const [params, _] = useSearchParams()

  const code = params.get("code")
  const state = params.get("state")

  useEffect(() => {
    if (code && state) {
      loginWithGoogle({ code, state }).then((result) => {
        setUser(result)
      })
    }
  }, [code, state])

  return (
    <div className="container-fluid vh-100" style={{ marginTop: "100px" }}>
      <div className="" style={{ marginTop: "100px" }}>
        <div className="rounded d-flex justify-content-center">
          <div className="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
            <div className="text-center">
              <h3 className="text-primary">Login with Google</h3>

              {user ? <p>Hello {user.user}</p> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoogleCallback

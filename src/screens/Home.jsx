import React from "react";
import { Link } from "react-router-dom"


const Home = () => {



  return (
    <>
      <div className="container-fluid vh-100" style={{ marginTop: "200px" }}>
        <div className="" style={{ marginTop: "200px" }}>
          <div className="rounded d-flex justify-content-center">
            <div className="col-md-6 col-sm-12 shadow-lg p-5 bg-light">
              <div className="text-center">
                <h3 className="text-primary">Home page</h3>
              </div>

              <hr /><br />
              <p>
                - Payment <br/>
                - Login with Google and Microsoft
              </p>

              <hr />
              <div className="text-center p-2">
                <Link
                  to={"payments/"}
                  type="button"
                  className="btn btn-outline-success"
                  style={{ width: "100px", marginRight: "5px" }}
                >
                  Payment
                </Link>
                <Link
                  to={"login/with/"}
                  type="button"
                  className="btn btn-outline-success"
                  style={{ width: "200px", marginLeft: "5px" }}
                >
                  Login With
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

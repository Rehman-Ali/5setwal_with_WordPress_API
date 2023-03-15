import React, { useState } from "react";
import Swal from "sweetalert2";
// import * as dotenv from 'dotenv'
import "./Login.css";
import logo from "../../assets/images/logo-admin-5etwal.png";
import { json, Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { SERVER_URL } from "../../config";

const Login = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState([])
  const [loginCreditional, setLoginCreditional] = useState({
    email: "",
    password: "",
  });

  const handelChange = (event) => {
    setLoginCreditional({
      ...loginCreditional,
      [event.target.name]: event.target.value,
    });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    let password = loginCreditional.password.trim();
    // console.log("password :", password)
    if (loginCreditional.email.length == 0 || password.length == 0) {
      let err = []
      if (loginCreditional.email.length == 0 ) {
        err.push("Invalid username!")
        setError(err)
      }
      if (password.length == 0) {
        err.push("Invalid Password!")
        setError(err)
      }
      // setError(err)
    }

    else {
      setError([])
      setLoggedIn(true)
    
      fetch(`${SERVER_URL}/jwt-auth/v1/token?username=${loginCreditional.email}&password=${loginCreditional.password}`, {
        // Adding method type
        method: "POST",
        // Adding body or contents to send
        // body: {
        //   username: loginCreditional.email,
        //   password: loginCreditional.password
        // },
        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        // Converting to JSON
        .then(response => response.json())
        // Displaying results to console
        .then(res => {
          setLoggedIn(false)
          if (res.token !== undefined) {
            localStorage.setItem("Token", JSON.stringify(res.token));
            setLoggedIn(false)
            navigate(0)
          }
          else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Check again invalid Credential.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
        );
    }
  };
  return (
    <>
      <div className="container-fluid login_container">
        <div className="row form-row">
          <div className="col form-col">
            <form className="form" onSubmit={handleLogin}>
              <div className="brand_logo_container">
                <img src={logo} className="brand_logo" alt="Logo" />
              </div>
              <div className="row-div">
                <div className="row justify-content-center">
                  <div className="col-9">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text icons"
                          id="basic-addon1"
                        >
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control input"
                        onChange={handelChange}
                        placeholder="Email"
                        value={loginCreditional.email}
                        name="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-9">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text icons"
                          id="basic-addon1"
                        >
                          <i className="fas fa-key"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control input"
                        onChange={handelChange}
                        placeholder="Password"
                        name="password"
                        value={loginCreditional.password}
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-6">
                    <button
                      type="submit"
                      name="button"
                      className="btn login_btn"
                    >
                      {loggedIn ? <div> <i className="fa-solid fa-circle-notch fa-spin"></i>  Login </div> : "Login"}
                    </button>
                  </div>
                </div>
                <div>
                  {error.length > 0 ? error.map((err, index) => {
                    return (<div className="errors" key={index}>
                      {err}
                    </div>)
                  }) : ""}
                </div>
                <div className="d-flex justify-content-center forget--links">
                  <Link to="/password/reset">Forgot Your Password?</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

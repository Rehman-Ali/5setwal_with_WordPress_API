import axios from "axios";
import React, { useEffect, useState } from "react";
import "./PasswordChange.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const PasswordChange = () => {
 
  return (
    <section className="PasswordChange">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12 m-auto col-12">
            <div className="card card-primary">
              <div className="card-header ">
                <h3 className="card-title">Password</h3>
              </div>
              <form
                className="change--passowrd--form"
              >
                <input type="hidden" name="_token" />

                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="">Old Password</label>
                    <input
                      type="password"
                      placeholder="Enter old password"
                      name="oldpassword"
                      className="form-control"
                     
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">New Password</label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      name="newpassword"
                      className="form-control"
                    
                    />
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary">submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PasswordChange;

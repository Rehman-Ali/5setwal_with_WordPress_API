import "./DashboardInfo.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardInfo = ( {dashboardReport}) => {
  
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="aw_small_box bg-warning">
          <div className="inner">
         
            <h3>100</h3>
            <p>Total Users</p>
          </div>
          <div className="icon">
            <i className="fa-solid fa-user-plus"></i>
          </div>
          <a href="#" className="aw_small_footer_box">
            More Info <i className="fa-sharp fa-solid fa-circle-right"></i>
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="aw_small_box bg-info">
          <div className="inner">
            <h3 className="aw_heading">100</h3>
            <p className="aw_users">Total Posts</p>
          </div>
          <div className="icon">
            <i className="fa-regular fa-image"></i>
          </div>
          <a href="#" className="aw_small_footer_box aw_white_te">
            More Info <i className="fa-sharp fa-solid fa-circle-right"></i>
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="aw_small_box bg-danger">
          <div className="inner">
            <h3 className="aw_heading">50</h3>
            <p className="aw_users">Inactive Users</p>
          </div>
          <div className="icon">
            <i className="fa-solid fa-user"></i>
          </div>
          <a href="#" className="aw_small_footer_box aw_white_te">
            More Info <i className="fa-sharp fa-solid fa-circle-right"></i>
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="aw_small_box bg-success">
          <div className="inner">
            <h3 className="aw_heading">60</h3>
            <p className="aw_users">Active Users</p>
          </div>
          <div className="icon">
            <i className="fa-solid fa-user"></i>
          </div>
          <a href="#" className="aw_small_footer_box aw_white_te">
            More Info <i className="fa-sharp fa-solid fa-circle-right"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default DashboardInfo;

import "./DashboardInfo.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../../config";
import { Link } from "react-router-dom";
const DashboardInfo = ( {dashboardReport}) => {
  
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  
  useEffect(() => {  
   axios
     .get(SERVER_URL+ '/w1/v1/users')
     .then((resp) => {
      setUser(resp.data);
     }).catch((err)=>{
       console.log(err);
     })

     axios
     .get(SERVER_URL+ '/w1/v1/posts')
     .then((resp) => {
      setPost(resp.data);
     }).catch((err)=>{
       console.log(err);
     })


 }, []);
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="aw_small_box bg-warning">
          <div className="inner">
         
            <h3>{user.length > 1 ? user.length : 0}</h3>
            <p>Total Users</p>
          </div>
          <div className="icon">
            <i className="fa-solid fa-user-plus"></i>
          </div>
          <Link to="/users" className="aw_small_footer_box">
            More Info <i className="fa-sharp fa-solid fa-circle-right"></i>
          </Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="aw_small_box bg-info">
          <div className="inner">
            <h3 className="aw_heading">{post.length > 1 ? post.length : 0}</h3>
            <p className="aw_users">Total Posts</p>
          </div>
          <div className="icon">
            <i className="fa-regular fa-image"></i>
          </div>
          <Link to="/posts" className="aw_small_footer_box aw_white_te">
            More Info <i className="fa-sharp fa-solid fa-circle-right"></i>
          </Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="aw_small_box bg-danger">
          <div className="inner">
            <h3 className="aw_heading">{user.length > 1 ? user.filter(item => item.is_approved === true).length : 0}</h3>
            <p className="aw_users">Approved Users</p>
          </div>
          <div className="icon">
            <i className="fa-solid fa-user"></i>
          </div>
          <Link to="/users" className="aw_small_footer_box aw_white_te">
            More Info <i className="fa-sharp fa-solid fa-circle-right"></i>
          </Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="aw_small_box bg-success">
          <div className="inner">
            <h3 className="aw_heading">{user.length > 1 ? user.filter(item => item.is_approved === false).length : 0}</h3>
            <p className="aw_users">Pending Users</p>
          </div>
          <div className="icon">
            <i className="fa-solid fa-user"></i>
          </div>
          <Link to="/users" className="aw_small_footer_box aw_white_te">
            More Info <i className="fa-sharp fa-solid fa-circle-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardInfo;

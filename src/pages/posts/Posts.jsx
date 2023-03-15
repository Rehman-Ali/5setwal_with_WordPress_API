import React, { useEffect, useState } from "react";
import "./Posts.css";
import BreadCrum from "../../component/breadcrum/BreadCrum";
import PostTable from "../../component/postTable/PostTable";
import axios from "axios";

const Posts = () => {
  const [postAllData, setPostAllData] = useState([]);
  const [postLoading,setPostLoading]=useState(false);
 

  return (
    <>
      <section className="aw_posts">
        <div className="container-fluid">
          <div className="row aw_posts_top">
            <BreadCrum pageName="Posts" currentPage="Posts" />
          </div>
          <div className="row">
           <PostTable postAllData={postAllData}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;

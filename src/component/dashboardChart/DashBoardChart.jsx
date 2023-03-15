import axios from "axios";
import React, { useEffect, useState } from "react";
import BarChart from "../barChart/BarChart";
import LineChartDemo from "../lineChart/LineChart";

const DashBoardChart = () => {

  return (
    <>
      
        <>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <LineChartDemo montlyPost={100}  totalPosts={1000}/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
          <BarChart montlyUser={50}  totalUsers={200}/>
          </div>
        </>
     
    </>
  );
};

export default DashBoardChart;

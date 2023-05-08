import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";
import "./LineChart.css";
import axios from "axios";
import {SERVER_URL} from '../../config';
const LineChartDemo = ( {montlyPost, totalPosts}) => {
  const [post, setPost] = useState([]);
  const [postTotal, setPostTotal] = useState(0);
 
  useEffect(() => {  
   axios
     .get(SERVER_URL+ '/w1/v1/posts')
     .then((resp) => {
      setPost(resp.data);
      setPostTotal(resp.data.length)
      let postPerMonth = [0,0,0,0,0,0,0,0,0,0,0,0];
      for(var i = 0; i < resp.data.length; i++){
        postPerMonth[new Date(resp.data[i].Post_Created_date).getMonth()] = postPerMonth[new Date(resp.data[i].Post_Created_date).getMonth()] + 1
      }
      setPost(postPerMonth); 
      setBasicDate(
        {
          labels: ["JAN", "FEB", "MAR", "APR", "MAY","JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: [
            {
              label: "My Second dataset",
              backgroundColor: "#FFA726",
              data: post,
            },
          ],
        }
      )
     }).catch((err)=>{
       console.log(err);
     })
 }, [post.length > 0]);

  const [basicData , setBasicDate] = useState({
    labels: ["JAN", "FEB", "MAR", "APR", "MAY","JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        label: "My Second dataset",
        backgroundColor: "#FFA726",
        data: post,
      },
    ],
  });

  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            display: false,
          },
        },
      },
    };

    let multiAxisOptions = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            display: false,
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          //   grid: {
          //     color: "black",
          //   },
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            color: "#495057",
          },
          grid: {
            display: false,
          },
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          ticks: {
            color: "#495057",
          },
          grid: {
            drawOnChartArea: false,
            display: false,
          },
        },
      },
    };

    return {
      basicOptions,
      multiAxisOptions,
    };
  };

  const { basicOptions, multiAxisOptions } = getLightTheme();


  return (
    <div className="aw_line_chart_wrap">
      <div className="card">
        <div className="monthy_line_chart">
          <h5>Monthly Posts</h5>
        </div>
        <div className="total_posts">
          <div className="total_ d-flex justify-content-between">
            <h6>{postTotal}</h6>
          </div>
          <div className="post_lastmonth">
            <p>Posts</p>
          </div>
        </div>
        <Chart type="line" data={basicData} options={basicOptions} />
      </div>
    </div>
  );
};

export default LineChartDemo;

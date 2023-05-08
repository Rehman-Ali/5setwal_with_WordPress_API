import React, { useState , useEffect} from "react";
import { Chart } from "primereact/chart";
import "./BarChart.css";
import axios from "axios";
import {SERVER_URL} from '../../config';
const BarChart = ( {montlyUser, totalUsers}) => {
  const [user, setUser] = useState([]);
  const [userTotal, setUserTotal] = useState(0);
  useEffect(() => {  
    axios
      .get(SERVER_URL+ '/w1/v1/users')
      .then((resp) => {
        setUser(resp.data);
        setUserTotal(resp.data.length)
        let userPerMonth = [0,0,0,0,0,0,0,0,0,0,0,0];
        for(var i = 0; i < resp.data.length; i++){
          userPerMonth[new Date(resp.data[i].user_registered).getMonth()] = userPerMonth[new Date(resp.data[i].user_registered).getMonth()] + 1;
      
        }
        setUser(userPerMonth);     

        setBasicDate(
          {
            labels: ["JAN", "FEB", "MAR", "APR", "MAY","JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
            datasets: [
              {
                label: "My Second dataset",
                backgroundColor: "#FFA726",
                data: user,
              },
            ],
          }
        )
      }).catch((err)=>{
        console.log(err);
      })
  }, [user.length > 0]);
  console.log(user, "user========")
  const [basicData , setBasicDate] = useState({
    labels: ["JAN", "FEB", "MAR", "APR", "MAY","JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        label: "My Second dataset",
        backgroundColor: "#FFA726",
        data: user,
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

    return {
      basicOptions,
    };
  };

  const { basicOptions, multiAxisOptions } = getLightTheme();
  return (
    <>
      <div className="aw_line_chart_wrap">
        <div className="card">
          <div className="card_Bar">
            <h5>Monthly Users</h5>
          </div>
          <div className="total_posts">
            <div className="total_ d-flex justify-content-between">
              <h6>{userTotal}</h6>
              {/* <p>
                <span>
                  <i className="fa-solid fa-arrow-up"></i>
                </span>
                33.1%
              </p> */}
            </div>
            <div className="post_lastmonth">
              <p>Users</p>
              {/* <p>Since Last Month</p> */}
            </div>
          </div>
          <Chart type="bar" data={basicData} options={basicOptions} />

          {/* <div className="monthss">
            <div className="this_month">
              <span></span>
              <p>This Month</p>
            </div>
            <div className="last_month">
              <span></span>
              <p>Last Month</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BarChart;

import "./AdminChart.css";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useAdminData } from "../../../contexts/DataContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function countDataObjs(array){
  let comparingDate=''
  let count=0
  let dataArray=[]
  array.map(order=>{
    let orderDate=new Date(order.date).getMonth()
    if(orderDate===comparingDate){count=count+1}else{dataArray.push(count); count=1; comparingDate=orderDate}})
  return dataArray
}

export default function AdminChart() {
  const { orders } = useAdminData();  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: countDataObjs(orders),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />
}

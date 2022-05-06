import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import * as Api from "../../api";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Top10Chart = ({}) => {
  const [labels, setLabels] = useState([]);
  const [visitors, setVisitors] = useState([]);
  //refactoring required
  useEffect(async () => {
    const res = await Api.get("rank10");
    let arr1 = [];
    let arr2 = [];
    res.data.map((v) => {
      arr1.push(v.name);
      arr2.push(v.visitors);
    });
    setLabels(arr1);
    setVisitors(arr2);
  }, []);
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
          drawTicks: true,
        },
        axis: "x",
        title: {
          color: "#ffffff",
        },
        ticks: { color: "white" },
      },
      y: {
        grid: {
          display: false,
          drawTicks: true,
        },
        axis: "y",
        title: {
          color: "#ffffff",
        },
        ticks: { color: "white" },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Top10",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Visitor",
        data: visitors,
        backgroundColor: ["rgba(153, 102, 255)"],
      },
    ],
  };

  return <Radar options={options} data={data} />;
};
export default Top10Chart;

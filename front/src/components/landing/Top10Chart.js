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
import { Bar } from "react-chartjs-2";

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
    indexAxis: "y",
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
        position: "top",
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
        position: "left",
      },
    },
    plugins: {
      legend: {
        display: "false",
        // color: "white",
        // position: "right",
        // ticks: { color: "white" },
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
        backgroundColor: ["rgb(10, 169, 101)"],
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
export default Top10Chart;

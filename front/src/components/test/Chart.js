import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Top10",
      },
    },
  };

  const labels = [
    "Sex On The Beach",
    "Caipirinha",
    "Long Island Icetea",
    "Baby Aspirin",
    "Mai Tai",
    "Mojito original",
    "Zombie",
    "57 Chevy",
    "Highfly",
    "Irish Flag",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Visitor",
        data: [
          107376, 83237, 69164, 65990, 65096, 58057, 50544, 40145, 27659, 26320,
        ],
        // "rgba(153, 102, 255, 0.2)"
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
          "rgba(201, 203, 207, 0.2)",
          "rgba(201, 203, 207, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

//top10
//칵테일 -> 순위 집계 잡히는 칵테일 / 차트  30개
//chat틀 <-data

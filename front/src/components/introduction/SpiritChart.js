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

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = [
  "India", //
  "China", //
  "Russia", //
  "France", //
  "USA", //
  "UK", //
  "Italy", //
  "Germany", //
  "Austrailia",
  "South Korea",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [92, 70, 57, 55, 38, 36, 33, 25, 21, 10],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: [8, 30, 43, 45, 61, 64, 67, 75, 78, 90],
      backgroundColor: "rgb(75, 192, 192)",
    },
  ],
};

export default function App() {
  const labels = [
    "India", //
    "China", //
    "France", //
    "USA", //
    "UK", //
    "Italy", //
    "Germany", //
    "Austrailia",
    "South Korea",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Spirit",
        data: [92, 70, 55, 39, 36, 33, 25, 21, 10],
        backgroundColor: "rgba(87,24,146,0.8)",
      },
      {
        label: "Beer",
        data: [8, 30, 45, 61, 64, 67, 75, 79, 90],
        backgroundColor: "rgba(200,200,200,0.8)",
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: false,
        text: "다른 나라와의 칵테일 소비량 및 인지도 차이",
      },
    },
    indexAxis: "y",
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
          drawTicks: true,
        },
        stacked: true,
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
        stacked: true,
        axis: "y",
        title: {
          color: "#ffffff",
        },
        ticks: { color: "white" },
        position: "left",
      },
    },
  };

  return <Bar options={options} data={data} />;
}

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
import { Line } from "react-chartjs-2";
import "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Top10CardChart = ({ cocktail }) => {
  const rankData = cocktail.years;
  const labels = Object.keys(rankData).map((v) => String(v));
  const dataArr = Object.values(rankData).map((v) => v + 1);

  const data = {
    labels,
    datasets: [
      {
        label: "Rank",
        data: dataArr,
        fill: false,
        borderColor: "#ff3897",
        backgroundColor: "#ff3897",
      },
    ],
  };

  const totalDuration = 10000;
  const delayBetweenPoints = totalDuration / data.length;
  const previousY = (ctx) =>
    ctx.index === 0
      ? ctx.chart.scales.y.getPixelForValue(100)
      : ctx.chart
          .getDatasetMeta(ctx.datasetIndex)
          .data[ctx.index - 1].getProps(["y"], true).y;
  const animation = {
    x: {
      type: "number",
      easing: "linear",
      duration: delayBetweenPoints,
      from: NaN, // the point is initially skipped
      delay(ctx) {
        if (ctx.type !== "data" || ctx.xStarted) {
          return 0;
        }
        ctx.xStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
    y: {
      type: "number",
      easing: "linear",
      duration: delayBetweenPoints,
      from: previousY,
      delay(ctx) {
        if (ctx.type !== "data" || ctx.yStarted) {
          return 0;
        }
        ctx.yStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
  };
  const options = {
    animation,
    responsive: true,
    plugins: {
      title: {
        display: true,
      },
    },
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
        reverse: true,

        axis: "y",
        title: {
          color: "#ffffff",
        },
        ticks: { color: "white" },
      },
    },
  };

  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
        height: "250px",
      }}
    >
      <Line animation={animation} options={options} data={data} />
    </div>
  );
};
export default Top10CardChart;

import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import SOTB from "./SOTB.json";
import "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const rankData = SOTB.years;
const labels = Object.keys(rankData);
const dataArr = Object.values(rankData).map((v) => v + 1);

const data = {
  labels,
  datasets: [
    {
      label: "Rank",
      data: dataArr,
      borderColor: "#228be6",
      backgroundColor: "#228be6",
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
      text: SOTB.name,
    },
  },
  scales: {
    y: {
      position: "left",
      reverse: true,
    },
  },
};

const Chart2 = () => {
  useEffect(() => {
    console.log(dataArr);
  }, []);
  return (
    <div style={{ width: 600 }}>
      <Line animation={animation} options={options} data={data} />
    </div>
  );
};
export default Chart2;

import React from "react";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function Linechart() {
  const data = {
    labels: [
      "june 1",
      "june 2",
      "june 3",
      "june 5",
      "june 6",
      "june 7",
      "june 8",
      "june 9",
    ],
    datasets: [
      {
        data: [8, 7.8, 6, 8, 7, 5, 6, 8, 7, 5],
        backgroundColor: "transparent",
        borderColor: "#0000ff",
        pointBorderColor: "transparent",
        pointBorderWidth: 1,
        tension: 0.2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 2,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: (value) => value + "K",
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <div className="w-[300px]   ml-[10px]">
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default Linechart;

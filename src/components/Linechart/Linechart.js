import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const newChart = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Sales",
            data: [1000, 2000, 1500, 3000, 2500, 4000, 3500],
            fill: false,
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, []);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default LineChart;

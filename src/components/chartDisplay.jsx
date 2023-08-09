import React from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Bar } from "react-chartjs-2";

const ChartDisplay = ({ dataAPI }) => {
  const day = new Date().getDay(); //Get day to dynamically add the color 0-Sunday
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  //   console.log( dataAPI);

  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
  );

  const data = {
    labels: dataAPI.map((item) => item.day),
    datasets: [
      {
        label: "sales",
        xAxisID: "x",
        yAxisID: "y",
        data: dataAPI.map((item) => item.amount),
        // backgroundColor: ["red", "red", "red", "blue", "red", "red", "red"],
        backgroundColor: days.map((x, index) =>
          index === day - 1 ? "HSL(186, 34%, 60%)" : "hsl(10, 79%, 65%)"
        ),
        hoverBackgroundColor: days.map((x, index) =>
          index === day - 1 ? "HSL(186, 15%, 60%)" : "hsl(10, 45%, 65%)"
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        // enabled: false,
        backgroundColor: "#000",
        yAlign: "bottom",
        caretSize: 0,
        displayColors: false,
        callbacks: {
          title: function (context) {
            return null; // no need for title
          },
          label: function (context) {
            return `$${context.formattedValue}`; // data with $
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        // display: false,
        grid: {
          display: false, //to not display the grid lines
        },
      },
      y: {
        display: false, // Don't disply the y axis line
        grace: 10, //to add space between the bar end and border
        grid: {
          display: false, //to not display the grid lines
        },
        ticks: {
          display: false, // dont display the step values in y axis
        },
      },
    },
  };

  return (
    <div className="bar-chart-div">
      <Bar className="bar-chart" data={data} options={options} />
    </div>
  );
};

export default ChartDisplay;

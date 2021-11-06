import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = ({ wallets }) => {

  const options: Object = {
    chart: {
      width: 227,
      height: 227,
      type: "pie",
    },
    labels: wallets.map(w => w.title),
    colors: wallets.map(w => w.color),
    stroke: {
      width: 0,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart options={options} series={wallets.map(w => w.amount)} type="pie" height="227" />
  );
};

export default PieChart;

import React from "react";
import Chart from "react-apexcharts";
import './CustomerReview.css'


const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "cases",
        data: [24,21,23,22,27,29,6,29,18],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: "100%",
      },

      fill: {
        colors: ["#3568F1"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      grid: {
        show: true,
      },
      xaxis: {
        categories: [
          "Akanksha Sharma",
          "Avantika Saxena",
          "Kanishka Mandal",
          "Milind Dumbhare",
          "Narsiv Khandeparkar",
          "Priya Bansal",
          "Salomy Johnson",
          "Sanjay Rana",
          "Vaisakh Gopal"
        ],
      },
      toolbar:{
        show: true
      }
    },
  };
  return <div className="CustomerReview">
        <Chart options={data.options} series={data.series} type="bar" />
  </div>;
};

export default CustomerReview;

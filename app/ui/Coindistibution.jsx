"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const Coindistribution = () => {
  const labels = [
    "Private Sale (2,400,000,000 coin)",
    "Rewards (2,000,000,000 coins)",
    "Marketing (2,000,000,000 coins)",
    "Liquidity (1,200,000,000 coins)",
    "CEX (1,000,000,000 coins) Burns",
    "Pre-Sale (6,000,000,000 coins)"
  ];

  const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#900a83"
  ];

  // Actual values
  const values = [2400000000, 2000000000, 2000000000, 1200000000, 1000000000, 6000000000];
  const total = values.reduce((a, b) => a + b, 0);

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderWidth: 3,
        borderColor: "#121212",
        hoverOffset: 20
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context) {
            const percentage = ((context.raw / total) * 100).toFixed(2);
            return `${context.label}: ${percentage}%`;
          }
        }
      },
      datalabels: {
        color: "#fff",
        font: { size: 14, weight: "bold" },
        formatter: (value) => `${((value / total) * 100).toFixed(1)}%`
      }
    },
    animation: {
      animateRotate: true,
      animateScale: true
    }
  };

  return (
    <div className="container max-w-[1500px] p-3 my-9 mx-auto">
      <h5 className="mx-auto text-center text-gray-400 p-3 font-bold border border-gray-500 w-fit rounded-md">
        Distribution
      </h5>
      <h1 className="text-6xl text-gray-500 text-center my-4">
        <span className="text-white">Coins</span> Distribution
      </h1>
      <p className="text-gray-500 text-center mx-auto text-xl max-w-[850px]">
        The GSM tokenomics framework is designed for sustainable growth and long-term value.
        With a total supply of {total.toLocaleString()} coins, the allocation supports balanced
        distribution, ecosystem development, and liquidity.
      </p>

      {/* Chart on top */}
      <div className="max-w-[400px] mx-auto my-10">
        <Doughnut data={data} options={options} />
      </div>

      {/* Labels below the chart */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {labels.map((label, i) => {
          const percentage = ((values[i] / total) * 100).toFixed(1);
          return (
            <div key={i} className="flex items-center gap-2">
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: colors[i] }}
              ></span>
              <span className="text-gray-300 text-sm md:text-base">
                {label} — <span className="text-white">{percentage}%</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Coindistribution;

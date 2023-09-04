import PieChart from "./components/PieChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./utils/Data";

Chart.register(CategoryScale);

export default function App() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: ["#2ec4b6", "#ef476f"],
        borderColor: "black",
        borderWidth: 0,
      },
    ],
  });

  return (
    <div className="App">
      <PieChart chartData={chartData} Data={Data} />
    </div>
  );
}

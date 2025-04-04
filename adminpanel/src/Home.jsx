import React, { useEffect, useState } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Home() {
  // State to store machine data
  const [machineData, setMachineData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch machine data on component mount
  useEffect(() => {
    fetch(
      "http://44.201.110.247:8000/api/get-shift-data/?shift=1&machine=1&date=2025-03-28"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((json) => {
        setMachineData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Dummy chart data (Replace this with API data later)
  const chartData = [
    { name: "Shift 1", good: 1808, bad: 0, total: 1808 },
    { name: "Shift 2", good: 1809, bad: 1, total: 1810 },
    { name: "Shift 3", good: 1808, bad: 2, total: 1810 },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      {/* If API is still loading, show a loading message */}
      {loading ? (
        <h2>Loading data...</h2>
      ) : error ? (
        <h2 style={{ color: "red" }}>Error: {error}</h2>
      ) : (
        <>
          <div className="main-cards">
            {/* Running Hours */}
            <div className="card">
              <div className="card-inner">
                <h3>Running Hours</h3>
                <BsFillArchiveFill className="card_icon" />
              </div>
              <h1>{machineData?.machine_running_hours || "N/A"}</h1>
            </div>

            {/* Good Products */}
            <div className="card">
              <div className="card-inner">
                <h3>Good Products</h3>
                <BsFillGrid3X3GapFill className="card_icon" />
              </div>
              <h1>{machineData?.good_products || 0}</h1>
            </div>

            {/* Bad Products */}
            <div className="card">
              <div className="card-inner">
                <h3>Bad Products</h3>
                <BsPeopleFill className="card_icon" />
              </div>
              <h1>{machineData?.bad_products || 0}</h1>
            </div>

            {/* Total Products */}
            <div className="card">
              <div className="card-inner">
                <h3>Total Products</h3>
                <BsFillBellFill className="card_icon" />
              </div>
              <h1>{machineData?.total_count || 0}</h1>
            </div>
          </div>

          {/* Charts */}
          <div className="charts">
            {/* Bar Chart */}
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={chartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="good" fill="#82ca9d" name="Good Products" />
                <Bar dataKey="bad" fill="#ff4d4d" name="Bad Products" />
                <Bar dataKey="total" fill="#8884d8" name="Total Products" />
              </BarChart>
            </ResponsiveContainer>

            {/* Line Chart */}
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={chartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="good" stroke="#82ca9d" />
                <Line type="monotone" dataKey="bad" stroke="#ff4d4d" />
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </main>
  );
}

export default Home;

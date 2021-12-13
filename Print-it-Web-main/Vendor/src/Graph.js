import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    Completed: 4000,
    Cancelled: 2400,
  },
  {
    name: "Febuary",
    Completed: 3000,
    Cancelled: 1398,
  },
  {
    name: "March",
    Completed: 2000,
    Cancelled: 4800,
  },
  {
    name: "April",
    Completed: 2780,
    Cancelled: 3908,
  },
  {
    name: "May",
    Completed: 1890,
    Cancelled: 4800,
  },
  {
    name: "June",
    Completed: 2390,
    Cancelled: 3800,
  },
  {
    name: "July",
    Completed: 3490,
    Cancelled: 4300,
  },
  {
    name: "August",
    Completed: 3490,
    Cancelled: 4300,
  },
  {
    name: "September",
    Completed: 3490,
    Cancelled: 4300,
  },
  {
    name: "Octuber",
    Completed: 3490,
    Cancelled: 4300,
  },
  {
    name: "November",
    Completed: 3490,
    Cancelled: 4300,
  },
  {
    name: "December",
    Completed: 3490,
    Cancelled: 4300,
  },
];

export default function Graph() {
  return (
    <div style={{ width: "1150px", height: "300px"}}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="6 6" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Cancelled" fill="#f37a4d" />
          <Bar dataKey="Completed" fill="#f7b9ab" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

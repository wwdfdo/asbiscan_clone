import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "2015",
    react: 23,
  },
  {
    name: "2016",
    react: 30,
  },
  {
    name: "2017",
    react: 35,
  },
  {
    name: "2018",
    react: 45,
  },
  {
    name: "2019",
    react: 50,
  },
  {
    name: "2020",
    react: 80,
  },
  {
    name: "2021",
    react: 90,
  },
];

const RechartLine = () => {
  return (
    <LineChart
      width={400}
      height={180}
      data={data}
      margin={{ top: 10, right: 10, left: -30, bottom: 0 }}
    >
      <Line type="monotone" dataKey="react" stroke="#0000ff" />
      <CartesianGrid stroke="#ccc" horizontal={false} vertical={false} />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default RechartLine;

import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const data = [
  {name: 'Ken', uv: 4000, price: 2400, amt: 2400},
  {name: 'Nephat', uv: -3000, price: 1398, amt: 2210},
  {name: 'Angel', uv: -2000, price: -9800, amt: 2290},
  {name: 'Cynthia', uv: 2780, price: 3908, amt: 2000},
  {name: 'Joseph', uv: -1890, price: 4800, amt: 2181},
  {name: 'Derrick', uv: 2390, price: -3800, amt: 2500},
  {name: 'Catherine', uv: 3490, price: 4300, amt: 2100},
];

const PositiveAndNegativeBarChart = () => (

  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={data}
              margin={{top: 10, right: 0, left: -15, bottom: 0}}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Legend/>
      <ReferenceLine y={0} stroke='#000'/>
      <Bar dataKey="price" fill="#003366"/>
      <Bar dataKey="uv" fill="#FE9E15"/>
    </BarChart>
  </ResponsiveContainer>
);

export default PositiveAndNegativeBarChart;

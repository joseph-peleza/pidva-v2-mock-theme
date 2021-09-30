import React from "react";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const data = [
  {name: 'Ken', uv: 4000},
  {name: 'Nephat', uv: 3000},
  {name: 'Angel', uv: 2000},
  {name: 'Cynthia'},
  {name: 'Joseph', uv: 1890},
  {name: 'Derrick', uv: 2390},
  {name: 'Catherine', uv: 3490},
];
const AreaChartConnectNulls = () => (
  <ResponsiveContainer width="100%">
    <div>
      <div className="mb-5">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data}
                     margin={{top: 10, right: 0, left: -15, bottom: 0}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area type='monotone' dataKey='uv' fillOpacity={1} stroke='#003366' fill='#003366'/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mb-4">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data}
                     margin={{top: 10, right: 0, left: -15, bottom: 0}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area connectNulls={true} type='monotone' dataKey='uv' fillOpacity={1} stroke='#003366' fill='#003366'/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  </ResponsiveContainer>
);

export default AreaChartConnectNulls;

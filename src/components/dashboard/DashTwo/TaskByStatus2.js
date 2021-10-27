import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts";

import Widget from "components/Widget";

const data = [{ name: 'Ongoing', value: 10 }, { name: 'New', value: 58 },
{ name: 'Not Started', value: 27 }, { name: 'Overdue', value: 26 }];

const COLORS = ['#FA8C16', '#5797fc', '#d9d9d9', '#f5222d',];


const TaskByStatus = () => {
  return (
    <Widget title={
      <h2 className="h4 gx-text-capitalize gx-mb-0">
        Cynthia</h2>
    }
      styleName="gx-text-center"
    >
      <div className="gx-py-3">
        <ResponsiveContainer width="100%" height={150}>
          <PieChart margin={{top: 5, right: 0, left: 0, bottom: 0}}>
            <Tooltip />
            <text
              x="50%" className="h2"
              y="40%" textAnchor="middle" dominantBaseline="middle">
              Total
            </text>
            <text
              x="50%" className="h1"
              y="60%" textAnchor="middle" dominantBaseline="middle">
              114
            </text>
            <Pie
              data={data} dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={47}
              outerRadius={57}
              fill="#8884d8"
            >
              {
                data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </Widget>
  );
};
export default TaskByStatus;

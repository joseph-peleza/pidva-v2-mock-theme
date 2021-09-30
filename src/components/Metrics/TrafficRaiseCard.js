import React from "react";
import {Line, LineChart, ResponsiveContainer, Tooltip} from "recharts";
import {Col, Row} from "antd";

import Widget from "components/Widget/index";

const data = [
  {name: 'Ken', traffic: 200},
  {name: 'Nephat', traffic: 1100},
  {name: 'Angel', traffic: 800},
  {name: 'Cynthia', traffic: 1700},
  {name: 'Cynthia', traffic: 600},
  {name: 'Cynthia', traffic: 1800},
  {name: 'Cynthia', traffic: 600},
];

const TrafficRaiseCard = () => {
  return (
    <Widget>
      <Row className="gx-align-items-center">
        <Col lg={12} md={12} sm={24} xs={24}>
          <div className="gx-actchart gx-px-3">
            <h2 className="gx-fs-xxxl gx-font-weight-medium gx-mb-1 gx-text-black">07% <i
              className="icon icon-menu-up gx-fs-sm"/>
            </h2>
            <p className="gx-mb-0">Traffic raise</p>
          </div>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={data}
                       margin={{top: 5, right: 5, left: 5, bottom: 5}}>
              <Tooltip/>
              <Line dataKey="traffic" stroke="#038FDE" strokeWidth={2}/>
            </LineChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </Widget>
  );
};

export default TrafficRaiseCard;

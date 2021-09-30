import React from "react";
import { Card, Col, Row } from "antd";
import TinyBarChart from "routes/extensions/charts/recharts/bar/Components/TinyBarChart";

import { Area, AreaChart, Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { increamentData, lineData } from "../../Metrics/data";
import ChartCard from "components/dashboard/DashOne/ChartCard";
import Auxiliary from "util/Auxiliary";
import Portfolio from "components/dashboard/DashOne/Portfolio";
import BalanceHistory from "components/dashboard/DashOne/BalanceHistory";
import SendMoney from "components/dashboard/DashOne/SendMoney";
import RewardCard from "components/dashboard/DashOne/RewardCard";
import CurrencyCalculator from "components/dashboard/DashOne/CurrencyCalculator";
import DashOneNews from "components/dashboard/DashOne/DashOneNews";
import DownloadMobileApps from "components/dashboard/DashOne/DownloadMobileApps";
import OrderHistory from "components/dashboard/DashOne/OrderHistory";
import RecentActivity from "components/dashboard/DashTwo/RecentActivity";
import Widget from "components/Widget/index";
// import { recentActivity } from "../../../socialApps/Wall/data";
import TicketList from "components/dashboard/DashTwo/TicketList";
import TaskByStatus from "components/dashboard/DashTwo/TaskByStatus";
import TaskList from "components/dashboard/DashTwo/TaskList";
import { recentActivity, taskList } from "../DashTwo/data";
import Overview from "components/dashboard/DashTwo/Overview";
import IconWithTextCard from "components/dashboard/DashTwo/IconWithTextCard";


const DashOne = () => {
  return (
    <Auxiliary>
      <Row>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard prize="500" title="23" icon="bitcoin"
            children={<ResponsiveContainer width="100%" height={75}>
              <AreaChart data={increamentData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Tooltip />
                <defs>
                  <linearGradient id="color3" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#163469" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#FE9E15" stopOpacity={0.9} />
                  </linearGradient>
                </defs>
                <Area dataKey='price' strokeWidth={0} stackId="2" stroke='#4D95F3' fill="url(#color3)"
                  fillOpacity={1} />
              </AreaChart>
            </ResponsiveContainer>}
            styleName="up" desc="New Requests" />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard prize="180" title="07" icon="etherium"
            children={<ResponsiveContainer width="100%" height={75}>
              <AreaChart data={increamentData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Tooltip />
                <defs>
                  <linearGradient id="color4" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#4ECDE4" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#06BB8A" stopOpacity={0.9} />
                  </linearGradient>
                </defs>
                <Area dataKey='price' type='monotone' strokeWidth={0} stackId="2" stroke='#4D95F3'
                  fill="url(#color4)"
                  fillOpacity={1} />
              </AreaChart>
            </ResponsiveContainer>}
            styleName="up" desc="Ongoing Tasks" />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard prize="120" title="08" icon="ripple"
            children={<ResponsiveContainer width="100%" height={75}>
              <AreaChart data={increamentData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Tooltip />
                <defs>
                  <linearGradient id="color5" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e81a24" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FEEADA" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
                <Area dataKey='price' strokeWidth={0} stackId="2" stroke='#FEEADA' fill="url(#color5)"
                  fillOpacity={1} />
              </AreaChart>
            </ResponsiveContainer>}
            styleName="up" desc="Awaiting Approval" />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard prize="200" title="47" icon="litcoin"
            children={<ResponsiveContainer width="100%" height={75}>

              <LineChart data={lineData}
                margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <Tooltip />
                <Line dataKey="price" stroke="#038FDE" dot={{ stroke: '#FEA931', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>}
            styleName="up" desc="Completed Requests" />
        </Col>
        <Col xl={24} lg={24} md={12} sm={24} xs={24}>
          <SendMoney />
        </Col>

        <Col xl={24} lg={24} md={24} sm={24} xs={24} className="gx-order-sm-1">
          <Row>
            <Col xl={16} lg={16} md={16} sm={24} xs={24}>
              <TicketList />
            </Col>
            <Col xl={8} lg={8} md={8} sm={24} xs={24}>
              <TaskByStatus />
            </Col>
            {/* <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <TaskList taskList={taskList}/>
            </Col> */}
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <IconWithTextCard cardColor="cyan" icon="diamond" title="1700" subTitle="New Requests" />
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <IconWithTextCard cardColor="orange" icon="tasks" title="800" subTitle="Ongoing Tasks" />
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <IconWithTextCard cardColor="teal" icon="team" title="160" subTitle="Awaiting Approval" />
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <IconWithTextCard cardColor="red" icon="files" title="1000" subTitle="Approved Reports" />
            </Col>
          </Row>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="Final Reports TAT">
            <TinyBarChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="In progres Reports TAT">
            <TinyBarChart />
          </Card>
        </Col>
      </Row>

    </Auxiliary>
  );
};

export default DashOne;

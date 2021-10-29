import React from "react";
import {
  Button,
  //  Alert, 
  Card, Col, Row, Carousel
} from "antd";
import TinyBarChart from "routes/extensions/charts/recharts/bar/Components/TinyBarChart";
import TinyBarChart2 from "routes/extensions/charts/recharts/bar/Components/TinyBarChart2";


import { Area, AreaChart, Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { increamentData, lineData } from "../../Metrics/data";
import ChartCard from "components/dashboard/DashOne/ChartCard";
import Auxiliary from "util/Auxiliary";
import Portfolio from "components/dashboard/DashOne/Portfolio";
import Portfolio1 from "components/dashboard/DashOne/Portfolio1";
import Portfolio2 from "components/dashboard/DashOne/Portfolio2";
import Portfolio3 from "components/dashboard/DashOne/Portfolio3";
import SendMoney from "components/dashboard/DashOne/SendMoney";
import TicketList from "components/dashboard/DashTwo/TicketList";
import IconWithTextCard from "components/dashboard/DashTwo/IconWithTextCard";
import RecentActivity from "components/dashboard/DashTwo/RecentActivity";
import { recentActivity } from "../DashTwo/data";
import Widget from "components/Widget/index";
import TaskByStatus1 from "components/dashboard/DashTwo/TaskByStatus1";
import TaskByStatus2 from "components/dashboard/DashTwo/TaskByStatus2";
import TaskByStatus3 from "components/dashboard/DashTwo/TaskByStatus3";

// CSS Styling 
const colStyles = {
  // flex: "20%",
  // width: "20%",
};
const divStyles = {
  // padding: ".5em",
};

class DashOne extends React.Component {
  state = {
    visiable: true,
  };
  handleClose = () => {
    this.setState({ visiable: false });
  };

  render() {
    return (
      <Auxiliary>
        <div style={{ ...divStyles }} className="gx-wel-ema gx-pt-xl-2">
          {/* Successfull Login Message. */}
          {/* {
            this.state.visiable ? (
              <Alert
                message="Welcome to Peleza Admin (v2.0.0) , your access and activity is strictly monitored. Kindly read the Terms and Conditions."
                type="success"
                closable 
                afterClose={this.handleClose}
              />
            ) : null
          } */}
          {/* Title of Logged In User. */}
          <h1 className="gx-mb-4" style={{ marginTop: "20px", color: "#153f56" }}><span>Hi,</span> Joseph! <span><small> You Have:</small></span></h1>
        </div>

        <Row>
          <Col xl={24} lg={24} md={12} sm={24} xs={24}>
            <Row>
              {/* New Reports Card */}
              <Col style={{ ...colStyles }} xl={6} lg={12} md={12} sm={12} xs={24}>
                <div style={{ ...divStyles }} >
                  <ChartCard prize="5000" title="23" icon="add-circle" iconcolor="primary"
                    children={<ResponsiveContainer width="100%" height={70}>
                      <AreaChart data={increamentData}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <Tooltip />
                        <defs>
                          <linearGradient id="color1" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="5%" stopColor="#163469" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#FE9E15" stopOpacity={0.9} />
                          </linearGradient>
                        </defs>
                        <Area dataKey='report' strokeWidth={0} stackId="2" stroke='#4D95F3' fill="url(#color3)"
                          fillOpacity={1} />
                      </AreaChart>
                    </ResponsiveContainer>}
                    styleName="up" desc="New Reports"
                  />
                </div>
              </Col>
              {/* Ongoing Reports Card */}
              <Col style={{ ...colStyles }} xl={6} lg={12} md={12} sm={12} xs={24}>
                <div style={{ ...divStyles }} >
                  <ChartCard prize="653" title="07" icon="progress" iconcolor="cyan"
                    children={<ResponsiveContainer width="100%" height={70}>
                      <AreaChart data={increamentData}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <Tooltip />
                        <defs>
                          <linearGradient id="color4" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="5%" stopColor="#4ECDE4" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#06BB8A" stopOpacity={0.9} />
                          </linearGradient>
                        </defs>
                        <Area dataKey='report' type='monotone' strokeWidth={0} stackId="2" stroke='#4D95F3'
                          fill="url(#color4)"
                          fillOpacity={1} />
                      </AreaChart>
                    </ResponsiveContainer>}
                    styleName="up" desc="Ongoing Reports"
                  />
                </div>
              </Col>
              {/* Overdue Reports Card */}
              <Col style={{ ...colStyles }} xl={6} lg={12} md={12} sm={12} xs={24}>
                <div style={{ ...divStyles }} >
                  <ChartCard prize="32" title="08" icon="exclamation" iconcolor="danger"
                    children={<ResponsiveContainer width="100%" height={70}>
                      <AreaChart data={increamentData}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <Tooltip />
                        <defs>
                          <linearGradient id="color5" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#e81a24" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#FEEADA" stopOpacity={0.8} />
                          </linearGradient>
                        </defs>
                        <Area dataKey='report' strokeWidth={0} stackId="2" stroke='#FEEADA' fill="url(#color5)"
                          fillOpacity={1} />
                      </AreaChart>
                    </ResponsiveContainer>}
                    styleName="up" desc="Overdue Reports"
                  />
                </div>
              </Col>
              {/* Reports Not Started card */}
              <Col style={{ ...colStyles }} xl={6} lg={12} md={12} sm={12} xs={24}>
                <div style={{ ...divStyles }} >
                  <ChartCard prize="753" title="47" icon="close-circle" iconcolor="grey"
                    children={<ResponsiveContainer width="100%" height={70}>

                      <LineChart data={lineData}
                        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                        <Tooltip />
                        <Line dataKey="report" stroke="#001724" dot={{ stroke: '#FEA931', strokeWidth: 2 }} />
                      </LineChart>
                    </ResponsiveContainer>}
                    styleName="up" desc="Reports Not Started"
                  />
                </div>
              </Col>
              {/* reports Pending review Card */}
              <Col style={{ ...colStyles }} xl={6} lg={12} md={12} sm={12} xs={24}>
                <div style={{ ...divStyles }} >
                  <ChartCard prize="367" title="07" icon="timepicker" iconcolor="orange"
                    children={<ResponsiveContainer width="100%" height={70}>
                      <AreaChart data={increamentData}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <Tooltip />
                        <defs>
                          <linearGradient id="color3" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="5%" stopColor="#61B1E4" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#038FDE" stopOpacity={0.9} />
                          </linearGradient>
                        </defs>
                        <Area dataKey="report" type='monotone' strokeWidth={0} stackId="2" stroke='#867AE5' fill="url(#color1)"
                          fillOpacity={1} />
                      </AreaChart>
                    </ResponsiveContainer>}
                    styleName="up" desc="Reports Pending Review"
                  />
                </div>
              </Col>
            </Row>
          </Col>
          {/* New Requests Table. */}
          <Col xl={24} lg={24} md={12} sm={24} xs={24}>
            <SendMoney />
          </Col>

          {/* Leave and Best Perfomer Cards. */}
          <Col xl={12} lg={24} md={24} sm={24} xs={24} className="gx-order-sm-1">
            <Row>
              {/* Leave Application Card */}
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <TicketList />
              </Col>
              {/* Best Perfomers Card */}
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <Carousel autoplay>
                  <div><Portfolio /></div>
                  <div><Portfolio1 /></div>
                  <div><Portfolio2 /></div>
                  <div><Portfolio3 /></div>
                </Carousel>
              </Col>
            </Row>
          </Col>
          {/* Recent Activity Card */}
          <Col xl={12} lg={24} md={24} sm={24} xs={24} className="gx-order-sm-2">
            <Widget>
              <RecentActivity recentList={recentActivity} shape="circle" />
            </Widget>
          </Col>
          {/* Productivity Chart */}
          <Col xl={24} lg={24} md={24} sm={24} xs={24} className="gx-order-sm-2">
            <h2 className="h4 gx-text-capitalize gx-mb-0" style={{ padding: "10px" }}>Productivity</h2>
            <Row>
              <Col lg={12} md={24} sm={24} xs={24}>
                <Card className="gx-card" title="Final Reports TAT">
                  <TinyBarChart />
                </Card>
              </Col>
              <Col lg={12} md={24} sm={24} xs={24}>
                <Card className="gx-card" title="In progres Reports TAT">
                  <TinyBarChart2 />
                </Card>
              </Col>
            </Row>
          </Col>

          <Col xl={24} lg={24} md={24} sm={24} xs={24} className="gx-order-sm-2">
            <Widget
              title={
                <h2 className="h4 gx-text-capitalize gx-mb-0 gx-text-black" style={{ padding: "10px" }}>Assigned Tasks</h2>
              }
              extra={
                <Button type="secondary">View All Specialists</Button>
              }
            >
              <Row>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                  <TaskByStatus1 />
                </Col>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                  <TaskByStatus2 />
                </Col>
                <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                  <TaskByStatus3 />
                </Col>
              </Row>
            </Widget>
          </Col>

          <Col xl={24} lg={24} md={24} sm={24} xs={24} className="gx-order-sm-2">
            <Row>
              <Col lg={24} md={24} sm={24} xs={24}>
                <h2 className="h4 gx-text-capitalize gx-mb-0" style={{ padding: "10px" }}>Analytics</h2>
              </Col>
              <Col xl={8} lg={12} md={12} sm={12} xs={24}>
                <IconWithTextCard cardColor="green" icon="check" title="11,111" subTitle="Total Verified" />
              </Col>
              <Col xl={8} lg={12} md={12} sm={12} xs={24}>
                <IconWithTextCard cardColor="teal" icon="avatar" title="4,111" subTitle="Candidates" />
              </Col>
              <Col xl={8} lg={12} md={12} sm={12} xs={24}>
                <IconWithTextCard cardColor="orange" icon="close" title="7,345" subTitle="Inconsistencies" />
              </Col>
              <Col xl={8} lg={12} md={12} sm={12} xs={24}>
                <IconWithTextCard cardColor="geekblue" icon="files" title="102,363" subTitle="Final Reports" />
              </Col>
              <Col xl={8} lg={12} md={12} sm={12} xs={24}>
                <IconWithTextCard cardColor="cyan" icon="team" title="11,111" subTitle="Clients Served" />
              </Col>
              <Col xl={8} lg={12} md={12} sm={12} xs={24}>
                <IconWithTextCard cardColor="purple" icon="timepicker" title="11,111" subTitle="In Progress" />
              </Col>
            </Row>
          </Col>
        </Row>

      </Auxiliary>
    );
  }
};

export default DashOne;

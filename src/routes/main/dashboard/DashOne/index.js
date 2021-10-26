import React from "react";
import {
  //  Alert, 
  Card, Col, Row } from "antd";
import TinyBarChart from "routes/extensions/charts/recharts/bar/Components/TinyBarChart";
import TinyBarChart2 from "routes/extensions/charts/recharts/bar/Components/TinyBarChart2";


import { Area, AreaChart, Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { increamentData, lineData } from "../../Metrics/data";
import ChartCard from "components/dashboard/DashOne/ChartCard";
import Auxiliary from "util/Auxiliary";
import Portfolio from "components/dashboard/DashOne/Portfolio";
import SendMoney from "components/dashboard/DashOne/SendMoney";
import TicketList from "components/dashboard/DashTwo/TicketList";
import IconWithTextCard from "components/dashboard/DashTwo/IconWithTextCard";
import RecentActivity from "components/dashboard/DashTwo/RecentActivity";
import {recentActivity } from "../DashTwo/data";
import Widget from "components/Widget/index";
import TaskByStatus from "components/dashboard/DashTwo/TaskByStatus";

// CSS Styling 
const colStyles = {
  flexBasis: "20%",
  width: "30%",
};
const divStyles = {
  padding: ".5em",
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
          <h1 className="gx-mb-3" style={{marginTop: "20px"}}>Hi, Joseph! <span><small>You Have:</small></span></h1>
        </div>
        
        <Row>
          {/* New Reports Card */}
          <Col style={{ ...colStyles }} xl={6} lg={12} md={12} sm={12} xs={24}>
            <div style={{ ...divStyles }} >
              <ChartCard prize="5000" title="23" icon="add-circle" iconcolor="primary"
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
              <ChartCard prize="653" title="07" icon="progress" iconcolor="orange"
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
                    <Area dataKey='report' strokeWidth={0} stackId="2" stroke='#FEEADA' fill="url(#color5)"
                      fillOpacity={1} />
                  </AreaChart>
                </ResponsiveContainer>}
                styleName="up" desc="OverDue Reports" 
              />
            </div>
          </Col>
          {/* Reports Not Started card */}
          <Col style={{ ...colStyles }} xl={6} lg={12} md={12} sm={12} xs={24}>
            <div style={{ ...divStyles }} >
              <ChartCard prize="753" title="47" icon="close-circle" iconcolor="grey"
                children={<ResponsiveContainer width="100%" height={75}>

                  <LineChart data={lineData}
                    margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                    <Tooltip />
                    <Line dataKey="report" stroke="#038FDE" dot={{ stroke: '#FEA931', strokeWidth: 2 }} />
                  </LineChart>
                </ResponsiveContainer>}
                styleName="up" desc="Reports Not Started" 
              />
            </div>
          </Col>
          {/* reports Pending review Card */}
          <Col style={{ ...colStyles }} xl={6} lg={12} md={12} sm={12} xs={24}>
            <div style={{ ...divStyles }} >
              <ChartCard prize="653" title="07" icon="timepicker"  iconcolor="secondary"
                children={<ResponsiveContainer width="100%" height={75}>
                  <AreaChart data={increamentData}
                            margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                    <Tooltip/>
                    <defs>
                      <linearGradient id="color1" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="5%" stopColor="#61B1E4" stopOpacity={0.9}/>
                        <stop offset="95%" stopColor="#867AE5" stopOpacity={0.9}/>
                      </linearGradient>
                    </defs>
                    <Area dataKey="report" type='monotone' strokeWidth={0} stackId="2" stroke='#867AE5' fill="url(#color1)"
                          fillOpacity={1}/>
                  </AreaChart>
                </ResponsiveContainer>}
                styleName="up" desc="Reports Pending Review" 
              />
            </div>
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
                <Portfolio />
              </Col>
            </Row>
          </Col>
          {/* Recent Activity Card */}
          <Col xl={12} lg={24} md={24} sm={24} xs={24} className="gx-order-sm-2">
            <Widget>
                <RecentActivity recentList={recentActivity} shape="circle"/>
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
          <h2 className="h4 gx-text-capitalize gx-mb-0" style={{ padding: "10px" }}>Assigned Tasks</h2>
            <Row>
              <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                  <TaskByStatus/>
              </Col>
              <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                  <TaskByStatus/>
              </Col>
              <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                  <TaskByStatus/>
              </Col>
            </Row>
          </Col>

          <Col xl={24} lg={24} md={24} sm={24} xs={24} className="gx-order-sm-2">
            <Row>
              {/* <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <TaskList taskList={taskList}/>
              </Col> */}
              <Col lg={24} md={24} sm={24} xs={24}>
                <h2 className="h4 gx-text-capitalize gx-mb-0" style={{ padding: "10px" }}>Analytics</h2>
              </Col>
              <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                <IconWithTextCard cardColor="cyan" icon="diamond" title="1700" subTitle="Total Verified" />
              </Col>
              <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                <IconWithTextCard cardColor="orange" icon="tasks" title="800" subTitle="Candidates" />
              </Col>
              <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                <IconWithTextCard cardColor="teal" icon="team" title="160" subTitle="Inconsistencies" />
              </Col>
              <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                <IconWithTextCard cardColor="red" icon="files" title="1000" subTitle="Final" />
              </Col>
              <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                <IconWithTextCard cardColor="blue" icon="files" title="1000" subTitle="Clients Served" />
              </Col>
              <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                <IconWithTextCard cardColor="green" icon="files" title="800" subTitle="In Progress" />
              </Col>
            </Row>
          </Col>
        </Row>

      </Auxiliary>
    );
  }
};

export default DashOne;

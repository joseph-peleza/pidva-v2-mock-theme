import React from "react";
import {Col, Row} from "antd";

import {Area, AreaChart, Line, LineChart, ResponsiveContainer, Tooltip} from "recharts";
import {increamentData, lineData} from "../../Metrics/data";
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

const DashOne = () => {
  return (
    <Auxiliary>
      <Row>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard prize="1700" title="23" icon="bitcoin"
                     children={<ResponsiveContainer width="100%" height={75}>
                       <AreaChart data={increamentData}
                                  margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                         <Tooltip/>
                         <defs>
                           <linearGradient id="color3" x1="0" y1="0" x2="1" y2="0">
                             <stop offset="5%" stopColor="#163469" stopOpacity={0.9}/>
                             <stop offset="95%" stopColor="#FE9E15" stopOpacity={0.9}/>
                           </linearGradient>
                         </defs>
                         <Area dataKey='price' strokeWidth={0} stackId="2" stroke='#4D95F3' fill="url(#color3)"
                               fillOpacity={1}/>
                       </AreaChart>
                     </ResponsiveContainer>}
                     styleName="up" desc="New Requests"/>
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard prize="800" title="07" icon="etherium"
                     children={<ResponsiveContainer width="100%" height={75}>
                       <AreaChart data={increamentData}
                                  margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                         <Tooltip/>
                         <defs>
                           <linearGradient id="color4" x1="0" y1="0" x2="1" y2="0">
                             <stop offset="5%" stopColor="#4ECDE4" stopOpacity={0.9}/>
                             <stop offset="95%" stopColor="#06BB8A" stopOpacity={0.9}/>
                           </linearGradient>
                         </defs>
                         <Area dataKey='price' type='monotone' strokeWidth={0} stackId="2" stroke='#4D95F3'
                               fill="url(#color4)"
                               fillOpacity={1}/>
                       </AreaChart>
                     </ResponsiveContainer>}
                     styleName="up" desc="Ongoing Tasks"/>
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard prize="160" title="08" icon="ripple"
                     children={<ResponsiveContainer width="100%" height={75}>
                       <AreaChart data={increamentData}
                                  margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                         <Tooltip/>
                         <defs>
                           <linearGradient id="color5" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#e81a24" stopOpacity={0.8}/>
                             <stop offset="95%" stopColor="#FEEADA" stopOpacity={0.8}/>
                           </linearGradient>
                         </defs>
                         <Area dataKey='price' strokeWidth={0} stackId="2" stroke='#FEEADA' fill="url(#color5)"
                               fillOpacity={1}/>
                       </AreaChart>
                     </ResponsiveContainer>}
                     styleName="down" desc="Awaiting Approval"/>
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ChartCard prize="1000" title="47" icon="litcoin"
                     children={<ResponsiveContainer width="100%" height={75}>

                       <LineChart data={lineData}
                                  margin={{top: 5, right: 5, left: 5, bottom: 5}}>
                         <Tooltip/>
                         <Line dataKey="price" stroke="#038FDE" dot={{stroke: '#FEA931', strokeWidth: 2}}/>
                       </LineChart>
                     </ResponsiveContainer>}
                     styleName="down" desc="Approved Requests"/>
        </Col>
        <Col xl={12} lg={24} md={12} sm={24} xs={24}>
          <Portfolio/>
        </Col>
        <Col xl={12} lg={24} md={12} sm={24} xs={24}>
          <BalanceHistory/>
        </Col>

        <Col xl={9} lg={24} md={24} sm={24} xs={24}>
          <SendMoney/>
        </Col>
        <Col xl={6} lg={12} md={12} sm={24} xs={24}>
          <RewardCard/>
        </Col>
        <Col xl={9} lg={12} md={12} sm={24} xs={24}>
          <CurrencyCalculator/>
        </Col>

        <Col xl={15} lg={24} md={24} sm={24} xs={24}>
          <DashOneNews/>
        </Col>
        <Col xl={9} lg={24} md={24} sm={24} xs={24}>
          <DownloadMobileApps/>
          <OrderHistory/>
        </Col>
      </Row>

    </Auxiliary>
  );
};

export default DashOne;

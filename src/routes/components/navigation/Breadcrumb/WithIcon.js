import React from "react";
import {Breadcrumb, Card } from "antd";
import { Icon } from "@ant-design/compatible";

const WithIcon = () => {
  return (
    <Card className="gx-card" title="WithIcon">
      <Breadcrumb>
        <Breadcrumb.Item>
          <span className="gx-link">
          <Icon type="home"/>
          </span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span className="gx-link">
          <Icon type="user"/>
          <span>Application List</span>
          </span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          Application
        </Breadcrumb.Item>
      </Breadcrumb>
    </Card>
  );
};

export default WithIcon;

import React from "react";

import {Card, Col, Row} from "antd";
import ContainerHeader from "src/components/ContainerHeader/index";
import Basic from "./Basic/index";
import IntlMessages from "src/util/IntlMessages";

const Callouts = ({match}) => {
  return (
    <Row>
      <Col span={24}>
        <ContainerHeader title={<IntlMessages id="extraElements.callout"/>} match={match}/>
      </Col>

      <Col span={24}>
        <Card title={<IntlMessages id="callouts.basic"/>}>
          <Basic/>
        </Card>
      </Col>
    </Row>
  );
};

export default Callouts;


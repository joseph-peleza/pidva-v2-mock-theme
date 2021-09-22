import React from "react";
import {Card} from "antd";

import TrafficLayerEx from "./Components/TrafficLayerEx";
import IntlMessages from "src/util/IntlMessages";

const TrafficLayer = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.trafficLayer"/>}>
      <TrafficLayerEx/>
    </Card>
  );
};

export default TrafficLayer;

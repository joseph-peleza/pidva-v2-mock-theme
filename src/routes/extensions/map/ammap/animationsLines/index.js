import React from "react";
import {Card} from "antd";

import AnimationsAlongLines from "./Components/AnimationsAlongLines";
import IntlMessages from "src/util/IntlMessages";

const AnimationsLines = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.mapDirection"/>}>
      <AnimationsAlongLines/>
    </Card>
  );
};

export default AnimationsLines;

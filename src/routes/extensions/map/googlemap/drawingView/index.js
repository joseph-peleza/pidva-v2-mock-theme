import React from "react";
import {Card} from "antd";

import DrawingView from "./Components/DrawingView";
import IntlMessages from "src/util/IntlMessages";

const Drawing = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.mapDrawing"/>}>
      <DrawingView/>
    </Card>
  );
};

export default Drawing;

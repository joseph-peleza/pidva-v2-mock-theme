import React from "react";
import {Card, Mentions} from "antd";

const {toString} = Mentions;

const Placement = () => {
    function onChange(contentState) {
      console.log(toString(contentState));
    }

    function onSelect(suggestion) {
      console.log('onSelect', suggestion);
    }

    return (
      <Card className="gx-card" title="Placement">
        <Mentions
          style={{width: '100%'}}
          onChange={onChange}
          suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
          onSelect={onSelect}
          placement="top"
        />
      </Card>
    );
  }
;

export default Placement;

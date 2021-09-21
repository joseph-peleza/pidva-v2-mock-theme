import React from "react";
import {Card, Mentions} from "antd";

const {toString, toContentState} = Mentions;

const Basic = () => {
  function onChange(contentState) {
    console.log(toString(contentState));
  }

  function onSelect(suggestion) {
    console.log('onSelect', suggestion);
  }

  return (
    <Card className="gx-card" title="Basic">
      <Mentions
        style={{width: '100%'}}
        onChange={onChange}
        defaultValue={toContentState('@afc163')}
        suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
        onSelect={onSelect}
      />
    </Card>
  );
};

export default Basic;

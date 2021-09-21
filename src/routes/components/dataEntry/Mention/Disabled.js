import React from "react";
import {Card, Mentions} from "antd";

const {toString} = Mentions;
const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

function Disabled() {
  function onChange(editorState) {
    console.log(toString(editorState));
  }

  return (
    <Card className="gx-card" title="Disabled">
      <div className="gx-mb-3">
        <Mentions
          style={{width: '100%'}}
          onChange={onChange}
          placeholder="this is disabled Mentions"
          suggestions={users}
          disabled
        />
      </div>
      <Mentions
        style={{width: '100%'}}
        onChange={onChange}
        placeholder="this is readOnly Mentions"
        suggestions={users}
        readOnly
      />
    </Card>
  );
}

export default Disabled;

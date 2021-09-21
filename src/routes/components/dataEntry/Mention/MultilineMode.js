import React from "react";
import {Card, Mentions} from "antd";

const {toString} = Mentions;

const MultilineMode = () => {
    function onChange(editorState) {
      console.log(toString(editorState));
    }

    return (
      <Card className="gx-card" title="Multiline Mode">
        <Mentions
          style={{width: '100%', height: 100}}
          onChange={onChange}
          suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
          multiLines
        />
      </Card>
    );
  }
;

export default MultilineMode;

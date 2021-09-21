import React from "react";
import {Card, Mentions} from "antd";

const {toContentState} = Mentions;

class Controlled extends React.Component {
  state = {
    value: toContentState('@afc163'),
  };
  handleChange = (editorState) => {
    this.setState({
      value: editorState,
    });
  };

  componentDidMount() {
    this.mention.focus();
  }

  render() {
    return (
      <Card className="gx-card" title="Controlled">
        <Mentions
          ref={ele => this.mention = ele}
          suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </Card>
    );
  }
}


export default Controlled;

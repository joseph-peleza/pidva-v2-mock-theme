import React from "react";
import Widget from "components/Widget/index";
import { Button, Col, Row, Avatar, Progress } from "antd";
import LineIndicator from "./LineIndicator";

const UserList = ['Angel', 'Nephat', 'Ken', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

class Portfolio extends React.Component {
  changeUser = () => {
    const index = UserList.indexOf(this.state.user);
    this.setState({
      user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
      color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      user: UserList[0],
      color: colorList[0],
    };
  }
  render() {
    return (
      <Widget>
        <h2 className="h4 gx-mb-3">Best Performer</h2>
        <Row>
          <Col lg={12} md={12} sm={12} xs={24}>
            <h2 className="gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium">Angel Maina</h2>
            <br/>
            <br/>
            <div className="ant-row-flex">
              {/* <Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }} size="large" className="gx-mr-2 gx-mb-0">
                {this.state.user}
              </Avatar> */}
              <Avatar className="gx-size-90" size="large" icon="user" src="https://wieldy.g-axon.work/assets/images/avatar/a11.png" />

              <Progress style={{ marginLeft: "20px" }} width={100} type="circle" percent={78} />

              {/* <h4 className="gx-pt-2 gx-chart-up">80% <i className="icon icon-menu-up gx-fs-sm" /></h4> */}

            </div>

            {/* <div className="ant-row-flex gx-mb-3 gx-mb-md-2"> */}
            {/* <Button className="gx-mb-0" size="small" style={{ marginLeft: 16, verticalAlign: 'middle' }}
              onClick={this.changeUser}>
              Change
            </Button> */}
            {/* <Button className="gx-mr-2" type="primary" onClick={this.changeUser}>View All</Button> */}
            {/* <Button className="gx-btn-cyan">Print List</Button> */}
            {/* </div> */}

            {/* <p className="gx-text-primary gx-pointer gx-d-none gx-d-sm-block gx-mb-1">
              <i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />Add Rating</p> */}
          </Col>
          <Col lg={12} md={12} sm={12} xs={24}>
            <div className="gx-site-dash">
              <p className="gx-text-grey h4 gx-mb-3">Performance Summary</p>
              <ul className="gx-line-indicator gx-fs-lg gx-pb-1 gx-pb-sm-0">
                <li>
                  <LineIndicator width="78%" title="Finals Within TAT" color="green" value="76%" />
                </li>
                <li>
                  <LineIndicator width="38%" title="Finals Past TAT" color="red" value="38%" />
                </li>
                <li>
                  <LineIndicator width="24%" title="In progress" color="orange" value="24%" />
                </li>
              </ul>
              <br />
              <Button className="gx-mr-2" type="primary" onClick={this.changeUser}>View All</Button>
              {/* <p className="gx-text-primary gx-pointer gx-d-block gx-d-sm-none gx-mb-0 gx-mt-3">
                <i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" /> Add New Wallet
              </p> */}
            </div>
          </Col>
        </Row>
      </Widget>
    );
  }

};

export default Portfolio;

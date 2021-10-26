import React from "react";

import Widget from "components/Widget";
import {ticketList} from "../../../routes/main/dashboard/DashTwo/data";
import TicketItem from "./TicketItem";

class TicketList extends React.Component {

  render() {
    return (
      <Widget title={
        <h2 className="h4 gx-text-capitalize gx-mb-0">
          Leave Application</h2>
      } styleName="gx-card-ticketlist"
              extra={<h5 className="gx-text-primary gx-mb-0 gx-pointer gx-d-none gx-d-sm-block">
                View All Applications <i
                className="icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"/>
              </h5>}>
        {
          ticketList.map((ticket, index) => <TicketItem key={index} data={ticket}/>)
        }
        <div className="gx-task-list-item gx-d-block gx-d-sm-none"><h5
          className="gx-text-primary gx-mb-0 gx-pointer">See all  <i
          className="icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"/></h5>
        </div>
      </Widget>
    );
  }
}


export default TicketList;

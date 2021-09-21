import React from "react";
import { Calendar } from "react-big-calendar";
import moment from "moment";
import events from "../events";

let allViews = Object.keys(Calendar.Views).map(k => Calendar.Views[k]);

Calendar.setLocalizer(
  Calendar.momentLocalizer(moment)
);
const Basic = (props) => {
  return (
    <div className="gx-main-content">
      <div className="gx-rbc-calendar">
        <Calendar
          {...props}
          events={events}
          views={allViews}
          step={60}
          defaultDate={new Date(2015, 3, 1)}/>
      </div>
    </div>
  )
};

export default Basic;

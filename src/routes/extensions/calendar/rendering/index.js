import React from "react";
import { Calendar } from "react-big-calendar";
import moment from "moment";

import events from "../events";

Calendar.setLocalizer(
  Calendar.momentLocalizer(moment)
);

function Event({event}) {
  return (
    <span>
      <strong>
      {event.title}
      </strong>
      {event.desc && (':  ' + event.desc)}
    </span>
  )
}

function EventAgenda({event}) {
  return <span>
    <em style={{color: 'magenta'}}>{event.title}</em>
    <p>{event.desc}</p>
  </span>
}


const Rendering = () => {
  return (
    <div className="gx-main-content">
      <div className="gx-rbc-calendar">
        <Calendar
          events={events}
          defaultDate={new Date(2015, 3, 1)}
          defaultView='agenda'
          components={{
            event: Event,
            agenda: {
              event: EventAgenda
            }
          }}
        />
      </div>
    </div>
  )
};

export default Rendering;

import React from "react";
import {
  ScheduleComponent,
  Inject,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { Heading } from "../components";

import dummy from "../config/dummy"; //! dummy

const Calendar = () => {
  return (
    <div className="md:m-10 m-2 mt-24 md:p-8 p-5 rounded-3xl bg-white">
      <Heading category="App" title="Calendar" />
      <ScheduleComponent
        height="800px"
        selectedDate={new Date(2022, 0, 10)}
        eventSettings={{ dataSource: dummy.schedule }}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;

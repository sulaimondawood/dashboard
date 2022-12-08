import FullCalendar from "@fullcalendar/react";
import { DayGridView } from "@fullcalendar/daygrid";
import dayGridPlugin from "@fullcalendar/daygrid";

// import dynamic from "next/dynamic";

import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
const calender = () => {
  return (
    <div>
      {/* <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" /> */}
    </div>
  );
};

export default calender;

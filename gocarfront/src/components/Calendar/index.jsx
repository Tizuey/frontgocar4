import React, { useContext, useState, useEffect } from "react";

import { Context } from "../../Context/Context";

import "./style.css";

import { useParams } from "react-router-dom";

import { Card } from "react-bootstrap";

import { addDays, differenceInDays, eachDayOfInterval } from "date-fns";

import { DateRange } from "react-date-range";
import * as locales from "react-date-range/dist/locale";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme

function Calendar() {
  const { productBookings, setRent, calendar, setCalendar } = useContext(Context);

  const { id } = useParams();

  const b = [];
  const a = productBookings?.map((reservas) => {
    let c = [];
    if (reservas?.product?.id == id) {
      c = eachDayOfInterval({
        start: new Date(reservas?.initalDay),
        end: new Date(reservas?.finalDay)
      })
    }
    for (let i = 0; i < c.length; i++) {
      b.push(c[i])
    }
  });

console.log("b :", productBookings);

  setRent(differenceInDays(calendar[0].endDate, calendar[0].startDate));

  const [months, setMonths] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 767px)");
    const listener = () => setMonths(media.matches);
    listener();
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [months]);

  return (
    <>
      <Card className="calendar_container_card">
        <div className="calendar_container_card_dates">
          <DateRange
            editableDateInputs={true}
            onChange={(item) => {
              setCalendar([item.selection]);
              setRent(
                differenceInDays(
                  item.selection.endDate,
                  item.selection.startDate
                )
              );
            }}
            moveRangeOnFirstSelection={false}
            ranges={calendar}
            months={months ? 2 : 1}
            initialFocusedRang={0}
            locale={locales.pt}
            disabledDates={(b)}
            minDate={addDays(new Date(), 0)}
            maxDate={addDays(new Date(), 180)}
            scroll={{ calendarHeight: 100 }}
            direction="horizontal"
            preventSnapRefocus={true}
            dateDisplayFormat="dd/MM/yyyy"
            fixedHeight={true}
          />
        </div>
      </Card>
    </>
  );
}

export default Calendar;
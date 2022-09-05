import React, { useEffect, useState } from "react";

interface TimerProps {
  title: string;
  endTime?: SetEndTime;
  propStart: boolean;
}
export interface SetEndTime {
  year: string;
  month: string;
  day: string;
  hours: string;
  mins: string;
  seg: string;
}
const Timer: React.FunctionComponent<TimerProps> = ({
  title,
  endTime = {
    year: "2022",
    month: "10",
    day: "7",
    hours: "23",
    mins: "59",
    seg: "3",
  },
  propStart,
}) => {
  let inittialValueStart = "";
  if (propStart) {
    inittialValueStart = "60";
  } else {
    inittialValueStart = "00";
  }
  const [hours, setHours] = useState<string>("00");
  const [min, setMin] = useState<string>("00");
  const [seg, setSeg] = useState<string>(inittialValueStart);
  const [day, setDay] = useState<string>("00");

  let months: Array<string> = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  let starTime: NodeJS.Timeout;

  const setEndTime = ({ year, month, day, hours, mins, seg }: SetEndTime): string => {
    day = day.length > 1 ? day : "0" + day;
    hours = hours.length > 1 ? hours : "0" + hours;
    mins = mins.length > 1 ? mins : "0" + mins;
    seg = seg.length > 1 ? seg : "0" + seg;

    return `${months[Number(month) - 1]} ${day} ${year} ${hours}:${mins}:${seg} GMT-0300`;
  };
  const getTimeRemaining = (endTime: string) => {
    const total = (Date.parse(endTime) - (Date.parse(new Date().toString()) + 1000)) / 1000;
    let seg: string = ("0" + Math.floor(total % 60)).slice(-2);
    let min: string = ("0" + Math.floor((total / 60) % 60)).slice(-2);
    let hs: string = ("0" + Math.floor((total / 3600) % 24)).slice(-2);
    let day: string = Math.floor(total / (3600 * 24)).toString();
    setSeg(seg);
    setMin(min);
    setHours(hs);
    setDay(day);
  };

  const start = () => {
    starTime = setTimeout(() => {
      getTimeRemaining(setEndTime(endTime));
    }, 1000);
  };
  const end = () => {
    console.log();
    if (Number(hours) <= 0 && Number(min) <= 0 && Number(seg) <= 0 && Number(day) <= 0 && Number(seg) == 0) {
      clearTimeout(starTime);
    }
  };

  useEffect(() => {
    start();
    end();
  }, [seg]);
  return (
    <div className="timer">
      <div className="title-clock-timer">
        <h2 className="titile">{title}</h2>
        <div>
          <h2 className="clock">
            {Number(day) == 0 ? "" : day + " :"} {hours} : {min} : {seg}
          </h2>
          <div className="containerSubTimer">
            {Number(day) != 0 ? <h4 className="mx-4">DD</h4> : null}
            <h4>{"HS"}</h4>
            <h4>{"min"}</h4>
            <h4>{"seg"}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;

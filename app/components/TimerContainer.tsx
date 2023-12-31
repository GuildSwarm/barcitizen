import React from "react";
import { NumberBox } from "./NumberBox";

interface timeProps {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

export const TimerContainer = ({
  days,
  hours,
  minutes,
  seconds,
}: timeProps) => {
  let daysFlip = false;
  let hoursFlip = false;
  let minutesFlip = false;
  let secondsFlip = true;

  if (
    Number(seconds) <= 0 &&
    Number(minutes) <= 0 &&
    Number(hours) <= 0 &&
    Number(days) <= 0
  ) {
    daysFlip = false;
    hoursFlip = false;
    minutesFlip = false;
    secondsFlip = false;
  }

  if (seconds == 0) {
    if (minutes != 0) {
      seconds = 59;
    }

    secondsFlip = false;
    minutesFlip = true;
  }
  if (minutes == 0) {
    if (hours != 0) {
      minutes = 59;
    }

    minutesFlip = false;
    hoursFlip = true;
  }

  if (hours == 0) {
    hoursFlip = false;
    if (days != 0) {
      daysFlip = true;
    }
  }

  if (Number(days) < 10) {
    days = "0" + days;
  }

  if (Number(hours) < 10) {
    hours = "0" + hours;
  }

  if (Number(minutes) < 10) {
    minutes = "0" + minutes;
  }

  if (Number(seconds) < 10) {
    seconds = "0" + seconds;
  }

  return (
    <div className="w-full lg:w-auto">
      <div className="grid grid-cols-4 justify-around gap-2 px-5 lg:gap-4 lg:flex lg:items-center lg:justify-between rounded-xl lg:px-6 lg:py-8 ">
        <NumberBox num={days} unit="Días" flip={daysFlip} />
        <span className="hidden text-5xl -mt-8 lg:inline-block lg:text-7xl font-normal text-gray-50 ">
          :
        </span>
        <NumberBox num={hours} unit="Horas" flip={hoursFlip} />
        <span className="hidden text-5xl -mt-8 lg:inline-block lg:text-7xl font-normal text-gray-50 ">
          :
        </span>
        <NumberBox num={minutes} unit="Minutos" flip={minutesFlip} />
        <span className="hidden text-5xl -mt-8 lg:inline-block lg:text-7xl font-normal text-gray-50 ">
          :
        </span>
        <NumberBox num={seconds} unit="Segundos" flip={secondsFlip} />
      </div>
    </div>
  );
};

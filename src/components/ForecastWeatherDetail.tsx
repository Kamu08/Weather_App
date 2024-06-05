/** @format */

import React from "react";
import Container from "./Container";
import WeatherIcon from "./WeatherIcon";
import WeatherDetails, { WeatherDetailProps } from "./WeatherDetails";
import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";

export interface ForecastWeatherDetailProps extends WeatherDetailProps {
  weatehrIcon: string;
  date: string;
  day: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
}

export default function ForecastWeatherDetail(
  props: ForecastWeatherDetailProps
) {
  const {
    weatehrIcon = "02d",
    date = "19.09",
    day = "Tuesday",
    temp,
    feels_like,
    temp_min,
    temp_max,
    description
  } = props;
  return (
    <Container className="gap-4 bg-blue-200">
      {/* left */}
      <section className=" flex gap-2 items-center px-4  ">
        <div className=" flex flex-col items-center">
          <WeatherIcon iconName={weatehrIcon}/>
          <p className="text-xs">{date}</p>
          <p className="text-xs">{day} </p>
        </div>

        {/*  */}
        <div className="flex flex-col ">
          <span className="text-2xl">{convertKelvinToCelsius(temp ?? 0)}°</span>
          <p className="text-xs space-x-1 whitespace-nowrap">
            <span> Feels like</span>
            <span>{convertKelvinToCelsius(feels_like ?? 0)}°</span>
          </p>
          <p className="capitalize text-xs"> {description}</p>
        </div>
      </section>
      {/* right */}
      <section className=" overflow-x-auto flex justify-between px-4  w-full pr-10">
        <WeatherDetails {...props} />
      </section>
    </Container>
  );
}

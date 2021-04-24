import React from 'react';
import { Button } from 'reactstrap';
import getWeather from '../helpers/data/weatherData';

export default function WeatherForm() {
  return (
    <div className="m-5">
      <h1>Weather</h1>
        <Button
          color="info"
          onClick={() => {
            getWeather()
              .then((weather) => console.warn(weather));
          }}
        >
          Get Weather
        </Button>
      </div>
  );
}

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import JokeForm from '../components/JokeForm';
import LyricsForm from '../components/LyricsForm';
import WeatherForm from '../components/WeatherForm';

function App() {
  return (
    <div className='App'>
      <JokeForm />
      <LyricsForm />
      <WeatherForm />
    </div>
  );
}

export default App;

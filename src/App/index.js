import React, { useState, useEffect } from 'react';
import {
  Button, Col, Row, Form, FormGroup, Label, Input
} from 'reactstrap';
import getJokes from '../helpers/data/jokeData';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import getWeather from '../helpers/data/weatherData';
import getLyrics from '../helpers/data/lyricsData';

function App() {
  const [singleJoke, setSingleJoke] = useState({});
  const [showPunchLine, setShowPunchline] = useState(false);
  const [artist, setArtist] = useState();
  const [song, setSong] = useState();
  const [showLyrics, setShowLyrics] = useState({});

  const jokeHandleClick = () => {
    if (showPunchLine === true) {
      setShowPunchline(false);
      getJokes()
        .then((joke) => {
          setSingleJoke(joke);
        });
    } else {
      setShowPunchline(true);
    }
  };

  const lyricsHandleClick = () => {
    if (showLyrics === true) {
      setShowLyrics(false);
    } else {
      setShowLyrics(true);
      getLyrics(artist, song)
        .then((lyrics) =>  setShowLyrics(lyrics));
    }
  };

  useEffect(() => {
    getJokes()
      .then((joke) => {
        setSingleJoke(joke);
      });
  }, []);

  return (
    <div className='App'>
      <h1>Joke Generator</h1>
      {singleJoke.setup}
      <br />
      <p>{showPunchLine ? singleJoke.punchline : ''}</p>
      <Button color="info" onClick={jokeHandleClick}>
        {showPunchLine ? 'Get Another Joke' : 'Get Punchline'}
      </Button>
      <div className="m-5">
        <h1>Lyrics Generator</h1>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="artistName">Artist</Label>
                <Input
                  type="text"
                  name="artistName"
                  id="artistName"
                  placeholder="Artist"
                  onChange={(e) => {
                    setArtist(e.target.value);
                  }}
                  />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="songName">Song</Label>
                <Input
                  type="text"
                  name="songName"
                  id="songName"
                  placeholder="Song"
                  onChange={(e) => {
                    setSong(e.target.value);
                  }}
                  />
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Button color="info" onClick={lyricsHandleClick}>
          {showLyrics ? 'Get More Lyrics' : 'Find a Song'}
        </Button>
      </div>
      <div className="m-5">
      <h1>Weather</h1>
        <Button
          color="info"
          onClick={() => {
            getWeather();
          }}
        >
          Get Weather
        </Button>
      </div>
    </div>
  );
}

export default App;

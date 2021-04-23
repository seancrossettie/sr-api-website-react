import React, { useState, useEffect } from 'react';
import {
  Button, Col, Row, Form, FormGroup, Label, Input
} from 'reactstrap';
import getJokes from '../helpers/data/jokeData';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

function App() {
  const [singleJoke, setSingleJoke] = useState({});
  const [showPunchLine, setShowPunchline] = useState(false);

  const handleClick = () => {
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
      <Button color="info" onClick={handleClick}>
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
                  />
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Button color="info" onClick={lyricsHandleClick}>
          {showLyrics ? 'Get More Lyrics' : 'Find a Song'}
        </Button>
      </div>
    </div>
  );
}

export default App;

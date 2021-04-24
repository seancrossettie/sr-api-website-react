import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import getJokes from '../helpers/data/jokeData';

export default function JokeForm() {
  const [singleJoke, setSingleJoke] = useState({});
  const [showPunchLine, setShowPunchline] = useState(false);

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

  useEffect(() => {
    getJokes()
      .then((joke) => {
        setSingleJoke(joke);
      });
  }, []);

  return (
    <>
    <h1>Joke Generator</h1>
    {singleJoke.setup}
    <br />
    <p>{showPunchLine ? singleJoke.punchline : ''}</p>
    <Button color="info" onClick={jokeHandleClick}>
      {showPunchLine ? 'Get Another Joke' : 'Get Punchline'}
    </Button>
    </>
  );
}

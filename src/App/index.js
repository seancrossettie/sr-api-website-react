import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
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
    </div>
  );
}

export default App;

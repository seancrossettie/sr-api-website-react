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
      setSingleJoke();
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
      {singleJoke.setup}
      <br />
      <p>{showPunchLine ? singleJoke.punchline : ''}</p>
      <Button color="info" onClick={handleClick}>
        Get Punchline
      </Button>
    </div>
  );
}

export default App;

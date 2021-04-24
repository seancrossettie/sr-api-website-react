import React, { useState } from 'react';
import {
  Button, Col, Row, Form, FormGroup, Label, Input
} from 'reactstrap';
import getLyrics from '../helpers/data/lyricsData';

export default function LyricsForm() {
  const [artist, setArtist] = useState();
  const [song, setSong] = useState();
  const [showLyrics, setShowLyrics] = useState(false);
  const [songLyrics, setSongLyrics] = useState({});

  const lyricsHandleClick = () => {
    if (showLyrics === true) {
      setShowLyrics(false);
    } else {
      setShowLyrics(true);
      getLyrics(artist, song)
        .then((lyrics) => setSongLyrics(lyrics));
    }
  };

  return (
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
        <p>{songLyrics.lyrics}</p>
        <Button color="info" onClick={lyricsHandleClick}>
          {showLyrics ? 'Get More Lyrics' : 'Find a Song'}
        </Button>
      </div>
  );
}

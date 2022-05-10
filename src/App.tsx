import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Stack, Button } from "react-bootstrap";
import {
  Play,
  StopCircle,
  SkipBackward,
  SkipForwardCircle,
  PauseCircle,
  Heart,
  HeartFill,
  Shuffle,
  ArrowRepeat,
} from "react-bootstrap-icons";

//
///Play, playplay-btn, play-circle, playfill

function App() {
  return (
    <Card>
      <p>Interpreter: </p>
      <p>Titel: </p>
      <Stack direction="horizontal" gap={3}>
        {/* <Button size="sm" className="rounded-circle"> */}
        <SkipBackward />
        {/* </Button> */}
        <Play />
        <PauseCircle />
        <StopCircle />
        <SkipForwardCircle />
        <Shuffle />
        <ArrowRepeat />
        <Heart />
      </Stack>
    </Card>
  );
}

export default App;

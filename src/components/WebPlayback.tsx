import React, { useEffect, useState } from "react";
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

interface WebPlaybackProps {
  token: string;
}

export function WebPlayback({ token }: WebPlaybackProps) {
  const [player, setPlayer] = useState(undefined);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb: any) => {
          cb(token);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }: any) => {
        console.log("Ready with Device ID", device_id);
      });

      player.addListener("not_ready", ({ device_id }: any) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.connect();
    };
  }, []);

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

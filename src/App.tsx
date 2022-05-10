import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { WebPlayback } from "./components/WebPlayback";

const ACCESS_TOKEN = "";

function App() {
  return <WebPlayback token={ACCESS_TOKEN} />;
}

export default App;

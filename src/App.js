import React from "react";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import CounterButton from "./CounterButton";
import { Button } from "react-bootstrap";
import {
  faCircleNotch,
  faStroopwafel,
  faSnowflake,
  faSlash,
  faCog,
  faYinYang
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <h1>World's Slowest Counter</h1>
      <h2>Count: {count}</h2>

      <div className="container">
        <div>
          <Button
            onClick={() => {
              setCount((cnt) => cnt + 1);
            }}
          >
            I am not a loading button
          </Button>
        </div>
        <h4>Bootstrap Spinner</h4>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <CounterButton setCount={setCount}>Loading Button</CounterButton>
          <CounterButton setCount={setCount}>
            Loading Button with a lot of text
          </CounterButton>
          <CounterButton size="lg" setCount={setCount}>
            multiline <br /> with large spinner
          </CounterButton>
        </div>
        <h4>FontAweomeIcons Spinners</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap"
          }}
        >
          <CounterButton setCount={setCount} type="fortawesome">
            Spinner
          </CounterButton>
          <CounterButton size="lg" setCount={setCount} type="fortawesome">
            FontAwesome multiline <br /> with large spinner
          </CounterButton>
          <CounterButton
            setCount={setCount}
            type="fortawesome"
            icon={faCircleNotch}
          >
            Cicle Notch
          </CounterButton>
          <CounterButton
            setCount={setCount}
            type="fortawesome"
            icon={faStroopwafel}
          >
            Stroop Wafel
          </CounterButton>
          <CounterButton
            setCount={setCount}
            type="fortawesome"
            icon={faSnowflake}
          >
            Snowflake
          </CounterButton>
          <CounterButton setCount={setCount} type="fortawesome" icon={faCog}>
            Cog
          </CounterButton>
          <CounterButton setCount={setCount} type="fortawesome" icon={faSlash}>
            Slash
          </CounterButton>
          <CounterButton
            setCount={setCount}
            type="fortawesome"
            icon={faYinYang}
          >
            Yin Yang
          </CounterButton>
        </div>
        <p>
          This app is licensed to Drew Killion and will cost one pizza for full
          usage rights{" "}
        </p>
      </div>
    </div>
  );
}

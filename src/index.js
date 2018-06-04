import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { range as d3range } from "d3";
import faker from "faker";
import { Circle, Rectangle, Triangle } from "./icons";
import AccordionFlow from "./AccordionFlow";
import { Content, Content2 } from "./Content";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const icons = [<Circle />, <Rectangle />, <Triangle />],
  flowData = d3range(10).map(i => [
    icons[i % 3],
    contentUpdated => (
      <Content2 title={`Row ${i}`} contentUpdated={contentUpdated}>
        {d3range(10)
          .slice(0, i)
          .map(() => faker.lorem.paragraph())}
      </Content2>
    )
  ]);

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <svg width="600" height="5000">
      <AccordionFlow data={flowData} />
    </svg>
  </div>
);

render(<App />, document.getElementById("root"));

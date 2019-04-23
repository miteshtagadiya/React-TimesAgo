import React from "react";
import { render } from "react-dom";
import TimeAgo from "../../src";
const App = () => {
  return <TimeAgo date={new Date()} type="default" suffix="ago" />;
};

render(<App />, document.getElementById("root"));

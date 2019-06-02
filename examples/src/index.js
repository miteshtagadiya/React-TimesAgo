import React from "react";
import { render } from "react-dom";
import TimeAgo from "../../src";
const App = () => {
  return <TimeAgo date={new Date(1551788578911 * 1000)} type="default" suffix="ago" />;
};

render(<App />, document.getElementById("root"));

import React from "react";
import { render } from "react-dom";
import TimeAgo from "../../src";
var moment = require("moment");

const App = () => {
  return (
    <body>
      <div style={{ textAlign: "center" }}>
        <h2>Default</h2>
        <center>
          <table style={{ border: "1px solid black" }}>
            <th style={{ border: "1px solid black" }}>
              <td>Input</td>
            </th>
            <th style={{ border: "1px solid black" }}>
              <td>Output</td>
            </th>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment().format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {<TimeAgo time={moment()} type="default" suffix="ago" />}
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment()
                  .subtract(1, "days")
                  .format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {
                  <TimeAgo
                    time={moment().subtract(1, "days")}
                    type="default"
                    suffix="ago"
                  />
                }
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment()
                  .subtract(5, "days")
                  .format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {
                  <TimeAgo
                    time={moment().subtract(5, "days")}
                    type="default"
                    suffix="ago"
                  />
                }
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment()
                  .subtract(7, "days")
                  .format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {
                  <TimeAgo
                    time={moment().subtract(7, "days")}
                    type="default"
                    suffix="ago"
                  />
                }
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment()
                  .subtract(15, "days")
                  .format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {
                  <TimeAgo
                    time={moment().subtract(15, "days")}
                    type="default"
                    suffix="ago"
                  />
                }
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment()
                  .subtract(35, "days")
                  .format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {
                  <TimeAgo
                    time={moment().subtract(35, "days")}
                    type="default"
                    suffix="ago"
                  />
                }
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment()
                  .subtract(150, "days")
                  .format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {
                  <TimeAgo
                    time={moment().subtract(150, "days")}
                    type="default"
                    suffix="ago"
                  />
                }
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment()
                  .subtract(365, "days")
                  .format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {
                  <TimeAgo
                    time={moment().subtract(365, "days")}
                    type="default"
                    suffix="ago"
                  />
                }
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment()
                  .subtract(500, "days")
                  .format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {
                  <TimeAgo
                    time={moment().subtract(500, "days")}
                    type="default"
                    suffix="ago"
                  />
                }
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment()
                  .subtract(3, "days")
                  .format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {
                  <TimeAgo
                    time={moment().subtract(3, "days")}
                    type="default"
                    suffix="ago"
                  />
                }
              </td>
            </tr>
          </table>
        </center>
      </div>

      <div style={{ textAlign: "center" }}>
        <h2>Facebook</h2>
        <center>
          <table style={{ border: "1px solid black" }}>
            <th style={{ border: "1px solid black" }}>
              <td>Input</td>
            </th>
            <th style={{ border: "1px solid black" }}>
              <td>Output</td>
            </th>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment().format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {<TimeAgo time={moment()} type="facebook" suffix="ago" />}
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment()
                  .subtract(1, "days")
                  .format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {
                  <TimeAgo
                    time={moment().subtract(1, "days")}
                    type="facebook"
                    suffix="ago"
                  />
                }
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment()
                  .subtract(5, "days")
                  .format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {
                  <TimeAgo
                    time={moment().subtract(5, "days")}
                    type="facebook"
                    suffix="ago"
                  />
                }
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment()
                  .subtract(7, "days")
                  .format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {
                  <TimeAgo
                    time={moment().subtract(7, "days")}
                    type="facebook"
                    suffix="ago"
                  />
                }
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment()
                  .subtract(15, "days")
                  .format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {
                  <TimeAgo
                    time={moment().subtract(15, "days")}
                    type="facebook"
                    suffix="ago"
                  />
                }
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment()
                  .subtract(35, "days")
                  .format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {
                  <TimeAgo
                    time={moment().subtract(35, "days")}
                    type="facebook"
                    suffix="ago"
                  />
                }
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment()
                  .subtract(150, "days")
                  .format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {
                  <TimeAgo
                    time={moment().subtract(150, "days")}
                    type="facebook"
                    suffix="ago"
                  />
                }
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment()
                  .subtract(365, "days")
                  .format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {
                  <TimeAgo
                    time={moment().subtract(365, "days")}
                    type="facebook"
                    suffix="ago"
                  />
                }
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment()
                  .subtract(500, "days")
                  .format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {
                  <TimeAgo
                    time={moment().subtract(500, "days")}
                    type="facebook"
                    suffix="ago"
                  />
                }
              </td>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black" }}>
                {moment()
                  .subtract(3, "days")
                  .format("LLL")}
              </td>
              <td style={{ border: "1px solid black" }}>
                {
                  <TimeAgo
                    time={moment().subtract(3, "days")}
                    type="facebook"
                    suffix="ago"
                  />
                }
              </td>
            </tr>
          </table>
        </center>
      </div>
    </body>
  );
};

render(<App />, document.getElementById("root"));

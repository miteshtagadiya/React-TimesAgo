import React, { Component } from "react";
var moment = require("moment");

class TimesAgo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //da: "2019-04-23T06:43:25.793Z",
      time: this.props.time ? this.props.time : "2019-04-23T13:41:07.175Z",
      currDate: moment()
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ t: Date.now() }),
      1000
    );
  }

  findDiff(diff1, type, prefix, suffix) {
    let currentYear = moment().year();
    let renderYaer = moment(this.state.time).year();
    let minutes = Math.round(diff1 / 60);
    let hours = Math.round(diff1 / 3600);
    let days = Math.round(diff1 / 86400);
    let weeks = Math.round(diff1 / 604800);
    let months = Math.round(diff1 / 2629440);
    let years = Math.round(diff1 / 31553280);
    let t;

    if (type !== "facebook") {
      if (diff1 <= 60) {
        t = "Just Now";
      } else if (minutes <= 60) {
        if (minutes == 1) {
          t = prefix + " " + "one minute " + suffix;
        } else {
          t = prefix + " " + minutes + " minutes " + suffix;
        }
      } else if (hours <= 24) {
        if (hours == 1) {
          t = prefix + " " + "an hour " + suffix;
        } else {
          t = prefix + " " + hours + " hrs " + suffix;
        }
      } else if (days <= 7) {
        if (days == 1) {
          t = prefix + " " + "yesterday";
        } else {
          t = prefix + " " + days + " days " + suffix;
        }
      } else if (weeks <= 4.3) {
        if (weeks == 1) {
          t = prefix + " " + "a week " + suffix;
        } else {
          t = prefix + " " + weeks + " weeks " + suffix;
        }
      } else if (months <= 12) {
        if (months == 1) {
          t = prefix + " " + "a month " + suffix;
        } else {
          t = prefix + " " + months + " months " + suffix;
        }
      } else {
        if (years == 1) {
          t = prefix + " " + "one year " + suffix;
        } else {
          t = prefix + " " + years + " years " + suffix;
        }
      }
    } else {
      if (diff1 <= 60) {
        t = "Just Now";
      } else if (minutes <= 60) {
        if (minutes == 1) {
          t = "1 min";
        } else {
          t = minutes + " mins";
        }
      } else if (hours <= 24) {
        if (hours == 1) {
          t = "1h";
        } else {
          t = hours + " hrs";
        }
      } else if (days <= 7) {
        if (days == 1) {
          t = "yesterday at " + moment(this.state.time).format("LT");
        } else {
          t =
            moment(this.state.time).format("MMM D") +
            " at " +
            moment(this.state.time).format("LT");
        }
      } else if (weeks <= 4.3) {
        t =
          moment(this.state.time).format("MMM D") +
          " at " +
          moment(this.state.time).format("LT");
      } else if (months <= 12) {
        if (currentYear === renderYaer) {
          t =
            moment(this.state.time).format("MMM D") +
            " at " +
            moment(this.state.time).format("LT");
        } else {
          t =
            moment(this.state.time).format("MMM D[,] YYYY") +
            " at " +
            moment(this.state.time).format("LT");
        }
      } else {
        t =
          moment(this.state.time).format("MMM D[,] YYYY") +
          " at " +
          moment(this.state.time).format("LT");
      }
    }

    return t;
  }

  render() {
    let da = moment();
    let prefix = "";
    let suffix = "";

    if (this.props.prefix && this.props.suffix) {
      prefix = this.props.prefix;
    }
    const diff1 = da.diff(this.state.time, "seconds");

    return this.findDiff(
      diff1,
      this.props.type,
      prefix.length !== 0 ? prefix : this.props.prefix,
      prefix.length !== 0 ? "" : this.props.suffix
    );
  }
}

TimesAgo.defaultProps = {
  prefix: "",
  suffix: "ago",
  type: "default",
  time: new Date(1551788578911 * 1000)
};

export default TimesAgo;

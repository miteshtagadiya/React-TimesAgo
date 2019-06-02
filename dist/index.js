"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moment = require("moment");

var TimeAgo = function (_Component) {
  _inherits(TimeAgo, _Component);

  function TimeAgo(props) {
    _classCallCheck(this, TimeAgo);

    var _this = _possibleConstructorReturn(this, (TimeAgo.__proto__ || Object.getPrototypeOf(TimeAgo)).call(this, props));

    _this.state = {
      //da: "2019-04-23T06:43:25.793Z",
      time: _this.props.time ? _this.props.time : "2019-04-23T13:41:07.175Z",
      currDate: moment()
    };
    return _this;
  }

  _createClass(TimeAgo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        return _this2.setState({ t: Date.now() });
      }, 1000);
    }
  }, {
    key: "findDiff",
    value: function findDiff(diff1, type, prefix, suffix) {
      var currentYear = moment().year();
      var renderYaer = moment(this.state.time).year();
      var minutes = Math.round(diff1 / 60);
      var hours = Math.round(diff1 / 3600);
      var days = Math.round(diff1 / 86400);
      var weeks = Math.round(diff1 / 604800);
      var months = Math.round(diff1 / 2629440);
      var years = Math.round(diff1 / 31553280);
      var t = void 0;

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
            t = moment(this.state.time).format("MMM D") + " at " + moment(this.state.time).format("LT");
          }
        } else if (weeks <= 4.3) {
          t = moment(this.state.time).format("MMM D") + " at " + moment(this.state.time).format("LT");
        } else if (months <= 12) {
          if (currentYear === renderYaer) {
            t = moment(this.state.time).format("MMM D") + " at " + moment(this.state.time).format("LT");
          } else {
            t = moment(this.state.time).format("MMM D[,] YYYY") + " at " + moment(this.state.time).format("LT");
          }
        } else {
          t = moment(this.state.time).format("MMM D[,] YYYY") + " at " + moment(this.state.time).format("LT");
        }
      }

      return t;
    }
  }, {
    key: "render",
    value: function render() {
      var da = moment();
      var prefix = "";
      var suffix = "";

      if (this.props.prefix && this.props.suffix) {
        prefix = this.props.prefix;
      }
      var diff1 = da.diff(this.state.time, "seconds");

      return this.findDiff(diff1, this.props.type, prefix.length !== 0 ? prefix : this.props.prefix, prefix.length !== 0 ? "" : this.props.suffix);
    }
  }]);

  return TimeAgo;
}(_react.Component);

TimeAgo.defaultProps = {
  prefix: "",
  suffix: "ago",
  type: "default",
  time: new Date(1551788578911 * 1000)
};

exports.default = TimeAgo;
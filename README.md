## React-TimesAgo

[![npm](https://img.shields.io/npm/v/react-timesago.svg)](https://www.npmjs.com/package/react-timesago)
[![npm](https://img.shields.io/npm/dm/react-timesago.svg)](https://www.npmjs.com/package/react-timesago) 
[![npm](https://img.shields.io/npm/dw/react-timesago.svg)](https://www.npmjs.com/package/react-timesago)
![npm](https://img.shields.io/npm/l/react-timesago.svg)

React-TimesAgo is a component that takes a date as a prop and returns a time-span with live updating date.

## Demo
[React-TimesAgo](https://miteshtagadiya.github.io/React-TimesAgo/)

## Installation

1.  Install React-TimesAgo as a dependency

```markdown
# NPM
npm install react-timesago
```

2.  Import the `react-timesago` module

```markdown
// ES6
import TimesAgo from "react-timesago";
```

## Example
```jsx
import TimesAgo from 'react-timesago';

render() {
<TimesAgo time={date} type="default" suffix="ago" /> // type default
<TimesAgo time={date} type="default" prefix="before" /> // type default
<TimesAgo time={date} type="facebook" /> // type facebook
}
```
## Props

These are all of the available props (and their default values) for the `<TimesAgo />` component.
```markdown
{
    prefix: "",
    suffix: "ago",
    type: "default",
    time: new Date(1551788578911 * 1000)
}
```

## Props Details

* `prefix` - formatter prefix for date, ignored for type facebook.
* `suffix` - formatter suffix for date, ignored for type facebook.
* `type` - types for date format (facebook or default)
* `time` - date.

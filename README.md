# react-bootstrap-spinner
Hi there, Bootstrap Spinner for React lovers &lt;3.

[![NPM](https://img.shields.io/npm/v/react-bootstrap-spinner.svg)](https://www.npmjs.com/package/react-bootstrap-spinner) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```js
npm install --save react-bootstrap-spinner

npm i bootstrap
```

## Usage
import bootstrap.min.css in main file e.g index.js

```jsx
import "bootstrap/dist/css/bootstrap.min.css";

```

```jsx
import React, { Component } from 'react'

//import ReactSpinner from react-bootstrap-spinner
import ReactSpinner from 'react-bootstrap-spinner'

class Example extends Component {
  render () {
    return (
      //And use wherever you want...
      <ReactSpinner type="border" color="primary" size="5" />
    )
  }
}
```

## Props

- **size**: Size `size in rem`
- **color**: You can give any bootstrap color - `primary, secondary, danger etc...`
- **type**: Add spinner type - `grow` or `border`

## License

MIT © [License](https://github.com/ajaymarathe/react-bootstrap-spinner/blob/master/LICENSE)

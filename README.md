# React Bootstrap Spinner
Hello, React developers! Enhance your projects with this Bootstrap Spinner component, tailored specifically for seamless integration into your React applications 🎉

[![NPM](https://img.shields.io/npm/v/react-bootstrap-spinner.svg)](https://www.npmjs.com/package/react-bootstrap-spinner) [![NPM](https://img.shields.io/npm/dt/react-bootstrap-spinner.svg)](https://www.npmjs.com/package/react-bootstrap-spinner) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
To install the package, run the following command:
```js
npm install --save react-bootstrap-spinner
```

## Usage
Here's an example of how to use the spinner component in your React project:
```bash
import React, { Component } from 'react'

// Import the Spinner component
import ReactSpinner from 'react-bootstrap-spinner'

// Import the Spinner CSS
import 'react-bootstrap-spinner/dist/css/_spinners.css'

// Optionally, you can import the SCSS version (Note: Ensure your project has `node-sass` installed)
// import 'react-bootstrap-spinner/dist/css/_spinners.scss'

class Example extends Component {
  render () {
    return (
      // Use the Spinner component wherever you need
      <ReactSpinner type="border" color="primary" size="5" />
    )
  }
}

```

## Props

| Prop    | Description                                                     | Values                               |
|---------|-----------------------------------------------------------------|--------------------------------------|
| `size`  | Specifies the size of the spinner (in `rem`).                   | Any valid `rem` value                |
| `color` | Set the color of the spinner using any Bootstrap color.         | `primary`, `secondary`, `danger`, etc. |
| `type`  | Defines the type of spinner to display.                         | `grow`, `border`                     |

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Thanks ❤️

## License

MIT © [License](https://github.com/ajaymarathe/react-bootstrap-spinner/blob/master/LICENSE)

## Author
Made with ❤️ by [Ajay Marathe](https://github.com/ajaymarathe)



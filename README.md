# react-prototype [![NPM version](https://img.shields.io/npm/v/react-prototype.svg)](https://npmjs.com/package/react-prototype) [![NPM downloads](https://img.shields.io/npm/dm/react-prototype.svg)](https://npmjs.com/package/react-prototype)

> Prototype React app like good old jQuery days.

## Install

```bash
$ npm install -g react-prototype
```

## Usage

Write some code in old nice-ish jQuery way:

```js
// app.jsx
// we are using babel for browser
// so feel free to write ES6 code
// React, ReactDom are avaliable as global variable
const App = () => {
	return (
		<div>
			why not jQuery?!
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
```

```bash
$ rp app.jsx
# it will open http://localhost:3030 for you
```

It's not enough? Okay, [npmcdn.com](http://npmcdn.com) is here to help:

```bash
# you like redux?
$ rp --lib redux/dist/redux.js
# treated as https://npmcdn.com/redux/dist/redux.js
# yes! benifits from npm!

# one more?
$ rp --lib a --lib b

# use url directly
$ rp --lib http://...
```

## Help

```bash
$ rp -h

  Prototype React app like good old jQuery days.

  Usage:
    rp [app.jsx]

    -p/--port:     server port
    -v/--version:  output version number
    -h/--help:     output help infomation
    -l/--lib:      use libraries from npmcdn.com
    -q/--quiet:    quiet mode
```

## Related

- [react-simple](https://github.com/jarsbe/react-simple): Inspired by this library. 
- [tooling](https://github.com/egoist/tooling): Fast developing an web app using webpack.

## License

MIT © [EGOIST](https://github.com/egoist)

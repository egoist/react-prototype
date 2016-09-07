#!/usr/bin/env node
'use strict'

const fs = require('fs')
const meow = require('meow')
const opn = require('opn')
const isUrl = require('is-url')
const express = require('express')
const app = express()

const cli = meow(`
  Usage:
    rp [app.jsx]

    -p/--port:     server port
    -v/--version:  output version number
    -h/--help:     output help infomation
    -l/--lib:      use libraries from unpkg.com
    -q/--quiet:    quiet mode
`, {
	alias: {
		port: 'p',
		version: 'v',
		help: 'h',
		lib: 'l',
		quiet: 'q'
	},
	default: {
		port: 3030,
		lib: []
	}
})

app.use('/local', express.static(process.cwd()))

app.use((req, res) => {
	const script = cli.input[0] || 'app.jsx'
	let lib = cli.flags.lib
	if (!Array.isArray(lib)) {
		lib = [lib]
	}
	lib = lib.map(name => {
		if (isUrl(name)) {
			return `<script src="${name}"></script>`
		}
		return `<script src="https://unpkg.com/${name}"></script>`
	})
	lib = lib.concat([`<script type="text/babel" src="/local/${script}"></script>`]).join('\n')

	let html = fs.readFileSync(__dirname + '/resource/template.html', 'utf8')
	html = html.replace('__EXTRA__', lib)

	res.send(html)
})

const port = cli.flags.port
app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`)
	if (!cli.flags.quiet) {
		opn(`http://localhost:${port}`)
	}
})

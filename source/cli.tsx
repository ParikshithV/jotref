#!/usr/bin/env node
import React from 'react';
import meow from 'meow';
import App from './app.js';
import {render} from 'ink';

const cli = meow(
	`
	Usage
	  $ jotref

	Options
		--add  Your string to add

	Examples
	  $ jotref --add=ls -a
	  Hello, Jane
`,
	{
		importMeta: import.meta,
		flags: {
			add: {
				type: 'string',
			},
		},
	},
);

render(<App add={cli.flags.add} />);

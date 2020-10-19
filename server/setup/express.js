'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';

export const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));
app.use(morgan('combined'));

app.use(express.static(path.resolve(__dirname, '../../logs')));

const port = process.env.PORT || 5000;
export const _server = app.listen(port);
console.log('Express Server started and listening on port ', port, 'mode (' + process.env.NODE_ENV + ')');

export function teardown() {
	_server.close();
}

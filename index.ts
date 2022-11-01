import express, { Express, Request, Response } from 'express';
import http from 'http';
import https from 'https';
import socketio from 'socket.io';
import cors from 'cors';
import { readFileSync } from 'fs';

import conf from './config.json';

const key = readFileSync(conf.KEY_PATH);
const cert = readFileSync(conf.CERT_PATH);

const app = express();

app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  res.send({ uptime: process.uptime() });
});

const httpsServer = https.createServer({ key, cert }, app);

const io = new socketio.Server(httpsServer);

io.on('connection', (...params) => {
  console.log(params);
});

httpsServer.listen(3000, () => {
  console.log('Running at localhost:3000');
});

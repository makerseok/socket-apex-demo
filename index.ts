import express, { Express, Request, Response } from 'express';
import http from 'http';
import socketio from 'socket.io';

const app = express();

app.get('/', (_req: Request, res: Response) => {
  res.send({ uptime: process.uptime() });
});

const server = http.createServer(app);
const io = new socketio.Server(server);

io.on('connection', (...params) => {
  console.log(params);
});

server.listen(3000, () => {
  console.log('Running at localhost:3000');
});

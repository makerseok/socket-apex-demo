import express, { Express, Request, Response } from 'express';
import http from 'http';
import socketio from 'socket.io';
import cors from 'cors';

const app = express();

app.use(cors());

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

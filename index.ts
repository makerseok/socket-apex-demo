import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const app = express.default();

app.get('/', (_req, res) => {
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

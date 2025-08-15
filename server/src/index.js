import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { setupBattleSockets } from './sockets/battle.js';

import rootRouter from './routes/index.js';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 5174;
const ORIGIN = process.env.ORIGIN || 'http://localhost:5173';

app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(cors({ origin: ORIGIN, credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(cookieParser());
app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Friendly root for base URL
app.get('/', (req, res) => {
  res.json({ ok: true, service: 'cba-server', routes: ['/health', '/api'] });
});

app.use('/api', rootRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const io = new SocketIOServer(httpServer, {
  cors: { origin: ORIGIN, credentials: true }
});

setupBattleSockets(io);

httpServer.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});

httpServer.on('error', (err) => {
  if (err && err.code === 'EADDRINUSE') {
    console.error(`\nPort ${PORT} is already in use.\n` +
      `Tip: close the existing process or choose another port:\n` +
      `  lsof -i :${PORT}  # find the PID on macOS\n` +
      `  kill -9 <PID>     # terminate it\n` +
      `Or set PORT in server/.env, e.g. PORT=5175 and update Vite proxy if needed.\n`);
    process.exit(1);
  }
  console.error(err);
  process.exit(1);
});

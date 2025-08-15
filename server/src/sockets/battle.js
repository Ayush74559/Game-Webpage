import { nanoid } from 'nanoid';

// Very simple in-memory matchmaking and battle state
const queue = []; // { socketId, user: { id, username } }
const rooms = new Map(); // roomId -> { players: [socketId], task, submissions: {}, scores: {} }

const demoTasks = [
  {
    id: 'sum-two-nums',
    title: 'Sum Two Numbers',
    prompt: 'Write a function sum(a,b) that returns a+b.',
    tests: [
      { input: [1,2], output: 3 },
      { input: [10,5], output: 15 },
    ],
  },
  {
    id: 'is-even',
    title: 'Is Even',
    prompt: 'Write a function isEven(n) that returns true if n is even.',
    tests: [
      { input: [2], output: true },
      { input: [7], output: false },
    ],
  },
];

function pickTask() {
  return demoTasks[Math.floor(Math.random() * demoTasks.length)];
}

export function setupBattleSockets(io) {
  io.on('connection', (socket) => {
    // client should emit 'auth' once connected with minimal user info
    let user = null;

    socket.on('auth', (u) => {
      user = typeof u === 'object' ? u : null;
    });

    socket.on('queue:join', () => {
      if (!user) return socket.emit('error', 'Not authenticated');
      queue.push({ socketId: socket.id, user });
      tryMatch(io);
    });

    socket.on('queue:leave', () => {
      const idx = queue.findIndex((q) => q.socketId === socket.id);
      if (idx >= 0) queue.splice(idx, 1);
    });

    socket.on('battle:submit', ({ roomId, code }) => {
      const room = rooms.get(roomId);
      if (!room) return;
      room.submissions[socket.id] = code;
      // naive scoring: faster submission gets 1 point if passes tests
      const passed = runFakeTests(room.task, code);
      room.scores[socket.id] = (room.scores[socket.id] || 0) + (passed ? 1 : 0);
      io.to(roomId).emit('battle:update', summary(room));
    });

    socket.on('disconnect', () => {
      const idx = queue.findIndex((q) => q.socketId === socket.id);
      if (idx >= 0) queue.splice(idx, 1);
      for (const [roomId, room] of rooms) {
        if (room.players.includes(socket.id)) {
          io.to(roomId).emit('battle:ended', { reason: 'player_left' });
          rooms.delete(roomId);
        }
      }
    });
  });
}

function tryMatch(io) {
  while (queue.length >= 2) {
    const a = queue.shift();
    const b = queue.shift();
    const roomId = `r_${nanoid(8)}`;
    const task = pickTask();
    const room = {
      players: [a.socketId, b.socketId],
      task,
      submissions: {},
      scores: {},
    };
    rooms.set(roomId, room);
    for (const sid of room.players) {
      const s = io.sockets.sockets.get(sid);
      if (s) s.join(roomId);
    }
    io.to(roomId).emit('battle:started', { roomId, task });
  }
}

function runFakeTests(task, code) {
  // This is a placeholder. In production, NEVER eval user code on the server.
  // Here we just award pass for non-empty code to simulate progress.
  return typeof code === 'string' && code.trim().length > 0;
}

function summary(room) {
  return {
    task: room.task,
    scores: room.scores,
    submissions: Object.keys(room.submissions).length,
  };
}

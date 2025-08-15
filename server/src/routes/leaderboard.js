import { Router } from 'express';

const router = Router();

// Static leaderboard demo
const players = [
  { rank: 1, name: 'CyberNinja', score: 15420, winrate: 94 },
  { rank: 2, name: 'QuantumGamer', score: 14850, winrate: 91 },
  { rank: 3, name: 'NeonStrike', score: 13960, winrate: 89 },
  { rank: 4, name: 'Player4', score: 13420, winrate: 88 },
  { rank: 5, name: 'Player5', score: 13000, winrate: 86 }
];

router.get('/', (req, res) => {
  res.json({ items: players });
});

export default router;

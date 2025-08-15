import { Router } from 'express';
import tournaments from './tournaments.js';
import leaderboard from './leaderboard.js';
import auth from './auth.js';
import users from './users.js';
import games from './games.js';

const router = Router();

router.use('/tournaments', tournaments);
router.use('/leaderboard', leaderboard);
router.use('/auth', auth);
router.use('/users', users);
router.use('/games', games);

router.get('/', (req, res) => {
  res.json({ ok: true, routes: ['/tournaments', '/leaderboard', '/auth', '/users', '/games'] });
});

export default router;

import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { readDB } from '../lib/db.js';

const router = Router();

router.get('/me', requireAuth, async (req, res) => {
  const db = await readDB();
  const user = db.users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ id: user.id, email: user.email, username: user.username, createdAt: user.createdAt });
});

export default router;

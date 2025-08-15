import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { readDB, writeDB } from '../lib/db.js';
import { z } from 'zod';

const router = Router();

router.get('/', async (req, res) => {
  const db = await readDB();
  res.json({ items: db.games });
});

const gameSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(2),
});

router.post('/', requireAuth, async (req, res) => {
  const parse = gameSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: 'Invalid data', details: parse.error.flatten() });
  const db = await readDB();
  const id = `g_${Date.now().toString(36)}`;
  const game = { id, ...parse.data, ownerId: req.user.id, createdAt: new Date().toISOString() };
  db.games.push(game);
  await writeDB(db);
  res.status(201).json(game);
});

export default router;

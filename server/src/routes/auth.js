import { Router } from 'express';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { readDB, writeDB } from '../lib/db.js';
import { signToken, requireAuth } from '../middleware/auth.js';

const router = Router();

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  username: z.string().min(2),
});

router.post('/signup', async (req, res) => {
  const parse = signupSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: 'Invalid data', details: parse.error.flatten() });
  const db = await readDB();
  const exists = db.users.some(u => u.email === parse.data.email);
  if (exists) return res.status(409).json({ error: 'Email already registered' });
  const id = `u_${Date.now().toString(36)}`;
  const hash = await bcrypt.hash(parse.data.password, 10);
  const user = { id, email: parse.data.email, username: parse.data.username, passwordHash: hash, createdAt: new Date().toISOString() };
  db.users.push(user);
  await writeDB(db);
  const token = signToken({ id: user.id, email: user.email, username: user.username });
  res.cookie('token', token, { httpOnly: true, sameSite: 'lax' });
  res.status(201).json({ id: user.id, email: user.email, username: user.username });
});

const loginSchema = z.object({ email: z.string().email(), password: z.string().min(6) });

router.post('/login', async (req, res) => {
  const parse = loginSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: 'Invalid data' });
  const db = await readDB();
  const user = db.users.find(u => u.email === parse.data.email);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  const ok = await bcrypt.compare(parse.data.password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' });
  const token = signToken({ id: user.id, email: user.email, username: user.username });
  res.cookie('token', token, { httpOnly: true, sameSite: 'lax' });
  res.json({ id: user.id, email: user.email, username: user.username });
});

router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ ok: true });
});

router.get('/me', requireAuth, async (req, res) => {
  const db = await readDB();
  const user = db.users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ id: user.id, email: user.email, username: user.username, createdAt: user.createdAt });
});

export default router;

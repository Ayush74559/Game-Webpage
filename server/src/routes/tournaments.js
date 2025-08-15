import { Router } from 'express';
import { z } from 'zod';

const router = Router();

// In-memory demo store
let tournaments = [
  { id: 'neon-circuit', name: 'Neon Circuit', date: '2025-10-15', prize: 25000, teams: 64, status: 'Open' },
  { id: 'speed-circuit', name: 'Speed Circuit', date: '2025-11-02', prize: 15000, teams: 32, status: 'Filling Fast' }
];

router.get('/', (req, res) => {
  res.json({ items: tournaments });
});

const createSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(2),
  date: z.string().min(4),
  prize: z.number().nonnegative(),
  teams: z.number().int().positive(),
  status: z.enum(['Open', 'Filling Fast', 'Closed'])
});

router.post('/', (req, res) => {
  const parse = createSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: 'Invalid data', details: parse.error.flatten() });
  }
  const exists = tournaments.some(t => t.id === parse.data.id);
  if (exists) return res.status(409).json({ error: 'Tournament already exists' });
  tournaments.push(parse.data);
  res.status(201).json(parse.data);
});

router.get('/:id', (req, res) => {
  const t = tournaments.find(t => t.id === req.params.id);
  if (!t) return res.status(404).json({ error: 'Not found' });
  res.json(t);
});

export default router;

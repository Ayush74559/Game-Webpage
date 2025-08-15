import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

export function signToken(payload, opts = {}) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d', ...opts });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export function requireAuth(req, res, next) {
  const token = req.cookies?.token || (req.headers.authorization || '').replace('Bearer ', '');
  const decoded = verifyToken(token);
  if (!decoded) return res.status(401).json({ error: 'Unauthorized' });
  req.user = decoded;
  next();
}

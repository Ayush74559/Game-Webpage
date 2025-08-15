import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '../../data');
const dataFile = path.join(dataDir, 'db.json');

const defaultData = {
  users: [],
  sessions: [],
  games: [],
};

async function ensure() {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(dataFile);
  } catch {
    await fs.writeFile(dataFile, JSON.stringify(defaultData, null, 2));
  }
}

export async function readDB() {
  await ensure();
  const raw = await fs.readFile(dataFile, 'utf-8');
  return JSON.parse(raw || '{}');
}

export async function writeDB(data) {
  await ensure();
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2));
}

import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const filePath = path.join(process.cwd(), 'data', 'system_language_mapping.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(jsonData);
}
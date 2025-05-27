import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // <-- สำคัญ
    res.setHeader('Content-Type', 'application/json');
  
    const data = require('../../core-lang-variables/system_language_mapping.json');
    res.status(200).json(data);
  }
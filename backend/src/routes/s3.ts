// src/routes/s3.ts
import express, { Request, Response } from 'express';
import { generateUploadUrl } from '../utils/s3';

const router = express.Router();

router.get('/get-signed-url', async (req: Request, res: Response) => {
  try {
    const { fileName, fileType } = req.query as { fileName: string; fileType: string };
    const url = await generateUploadUrl(fileName, fileType);
    res.status(200).json({ url });
  } catch (error) {
    console.error('Error generating signed URL:', error);
    res.status(500).json({ error: 'Failed to generate signed URL' });
  }
});

export default router;

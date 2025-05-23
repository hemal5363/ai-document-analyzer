import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express backend!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hi from TypeScript + Express!');
});

// Глобальний обробник помилок
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'There was an error on the server!' });
});

export default app;

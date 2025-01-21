import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

// Middleware для парсингу JSON
app.use(express.json());

// Привітальний маршрут
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello from TypeScript + Express!');
});

export default app;

import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';

import MainRoute from './routes/mainRoute';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private initializeRoutes() {
    this.app.get('/', this.homeRouteHandler);
    this.app.use('/api', MainRoute);
  }

  private homeRouteHandler(req: Request, res: Response, next: NextFunction): void {
    res.send('TypeScript + Express! 🚀');
  }

  private initializeErrorHandling(): void {
    this.app.use(this.errorHandler);
  }

  private errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
    console.error(err.stack);
    res.status(500).json({ message: 'There was an error on the server!' });
  }
}

export default new App().app;
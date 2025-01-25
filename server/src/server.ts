import app from './app';
import prisma from './utils/prisma';
import dotenv from 'dotenv';

dotenv.config();

class Server {
  private port: number;

  constructor() {
    this.port = parseInt(process.env.PORT || '3000');
  }

  public async start(): Promise<void> {
    try {
      await prisma.$connect();
      console.log('Connected to the database');

      app.listen(this.port, () => {
        console.log(`Server is running on http://localhost:${this.port}`);
      });
    } catch (error: any) {
      console.error('Error connecting to the database:', error);
      process.exit(1);
    }
  }
}

const server = new Server();
server.start();

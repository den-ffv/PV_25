import app from './app';
import dotenv from 'dotenv';

dotenv.config();

class Server {
  private port: number;
  
  constructor() {
    this.port = parseInt(process.env.PORT || '3000');
  }

  public start(): void {
    app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

const server = new Server();
server.start();
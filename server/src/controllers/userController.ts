import { Request, Response } from "express";

import prisma from "../utils/prisma";

class UserController {
  public async getList (req: Request, res: Response): Promise<any> {
    try {
      const users = await prisma.user.findMany();
      
      if (!users) {
        return res.status(404).json({ message: "NO_FOUND" });
      }
      return res.status(200).json(users);
    } catch (error: any) {
      console.error("Error get all: ", error.message);
    }
  }
  public async getById (req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;

      const user = await prisma.user.findUnique({
        where: {
          id: parseInt(id)
        }
      });

      if (!user) {
        return res.status(404).json({ message: "NO_FOUND" });
      }
      return res.status(200).json(user);
    } catch (error: any) {
      console.error("Error get: ", error.message );
    }
  }
  public async create (req: Request, res: Response): Promise<any> {
    try {
      const data = req.body;

      const user = await prisma.user.create({ data });
      
      return res.status(201).json(user);
    } catch (error: any) {
      console.error("Error create: ", error.message );
    }
  }
  public async update (req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const data = req.body;

      const user = await prisma.user.update({ where: { id: parseInt(id) }, data });

      if (!user) {
        return res.status(404).json({ message: "NO_FOUND" });
      }

      return res.status(200).json(user);
    } catch (error: any) {
      console.error("Error update: ", error.message );
    }
  }
  public async delete (req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;

      await prisma.user.delete({ where: { id: parseInt(id) } });
      return res.status(204).json({ message: "SUCCESSFULLY_DELETED" });
    } catch (error: any) {
      console.error("Error delete: ", error.message );
    }
  }
}

export default new UserController();
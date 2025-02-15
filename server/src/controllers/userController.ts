import { Request, Response } from "express";

import prisma from "../utils/prisma";

class UserController {
  public async getList (req: Request, res: Response): Promise<any> {
    try {
      const users = await prisma.user.findMany();
      
      if (!users) {
        return res.status(404).json({ message: "No users found" });
      }
      return res.status(200).json(users);
    } catch (error: any) {
      console.error("Error getting all users: ", error.message);
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
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error: any) {
      console.error("Error getting user: ", error.message );
    }
  }
  public async create (req: Request, res: Response): Promise<any> {
    try {
      const data = req.body;

      const user = await prisma.user.create({ data });
      
      return res.status(201).json(user);
    } catch (error: any) {
      console.error("Error creating user: ", error.message );
    }
  }
  public async update (req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const data = req.body;

      const user = await prisma.user.update({ where: { id: parseInt(id) }, data });
      return res.status(200).json(user);
    } catch (error: any) {
      console.error("Error updateing user: ", error.message );
    }
  }
  public async delete (req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;

      await prisma.user.delete({ where: { id: parseInt(id) } });
      return res.status(204).json({ message: "The user has been successfully deleted" });
    } catch (error: any) {
      console.error("Error deleteing user: ", error.message );
    }
  }
}

export default new UserController();
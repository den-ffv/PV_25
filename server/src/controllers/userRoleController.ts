import { Request, Response } from "express";

import prisma from "../utils/prisma";

class UserRoleController {
  public async getList (req: Request, res: Response): Promise<any> {
    try {
      const userRoles = await prisma.userRole.findMany();
      
      if (!userRoles) {
        return res.status(404).json({ message: "NO_FOUND" });
      }
      return res.status(200).json(userRoles);
    } catch (error: any) {
      console.error("Error get all: ", error.message);
    }
  }
  public async getById (req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;

      const userRole = await prisma.userRole.findUnique({
        where: {
          id: parseInt(id)
        }
      });

      if (!userRole) {
        return res.status(404).json({ message: "NO_FOUND" });
      }
      return res.status(200).json(userRole);
    } catch (error: any) {
      console.error("Error get: ", error.message );
    }
  }
  public async create (req: Request, res: Response): Promise<any> {
    try {
      const data = req.body;

      const userRole = await prisma.userRole.create({ data });
      
      return res.status(201).json(userRole);
    } catch (error: any) {
      console.error("Error create: ", error.message );
    }
  }
  public async update (req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const data = req.body;

      const userRole = await prisma.userRole.update({ where: { id: parseInt(id) }, data });

      if (!userRole) {
        return res.status(404).json({ message: "NO_FOUND" });
      }

      return res.status(200).json(userRole);
    } catch (error: any) {
      console.error("Error update: ", error.message );
    }
  }
  public async delete (req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;

      await prisma.userRole.delete({ where: { id: parseInt(id) } });
      return res.status(204).json({ message: "SUCCESSFULLY_DELETED" });
    } catch (error: any) {
      console.error("Error delete: ", error.message );
    }
  }
}

export default new UserRoleController();
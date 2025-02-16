import { Request, Response } from "express";

import prisma from "../utils/prisma";

class RoleController {
  public async getList (req: Request, res: Response): Promise<any> {
    try {
      const roles = await prisma.role.findMany();
      
      if (!roles) {
        return res.status(404).json({ message: "NO_FOUND" });
      }
      return res.status(200).json(roles);
    } catch (error: any) {
      console.error("Error get all: ", error.message);
    }
  }
  public async getById (req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;

      const role = await prisma.role.findUnique({
        where: {
          id: parseInt(id)
        }
      });

      if (!role) {
        return res.status(404).json({ message: "NO_FOUND" });
      }
      return res.status(200).json(role);
    } catch (error: any) {
      console.error("Error get: ", error.message );
    }
  }
  public async create (req: Request, res: Response): Promise<any> {
    try {
      const data = req.body;

      const role = await prisma.role.create({ data });
      
      return res.status(201).json(role);
    } catch (error: any) {
      console.error("Error create: ", error.message );
    }
  }
  public async update (req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const data = req.body;

      const role = await prisma.role.update({ where: { id: parseInt(id) }, data });

      if (!role) {
        return res.status(404).json({ message: "NO_FOUND" });
      }

      return res.status(200).json(role);
    } catch (error: any) {
      console.error("Error update: ", error.message );
    }
  }
  public async delete (req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;

      await prisma.role.delete({ where: { id: parseInt(id) } });
      return res.status(204).json({ message: "SUCCESSFULLY_DELETED" });
    } catch (error: any) {
      console.error("Error delete: ", error.message );
    }
  }
}

export default new RoleController();
import { Request, Router, Response } from "express";
const router = Router();

router.get("/", (_: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "Test Biva APP", status: "Running", version: "1.0" });
});



export default router;
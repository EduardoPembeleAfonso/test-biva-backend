import { Router } from "express";
import baseRoute from "./baseRoute.routes";
import usersRoutes from "./users.routes";

const router = Router();

router.use(baseRoute);
router.use(usersRoutes);

export default router;

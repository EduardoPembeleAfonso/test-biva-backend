import { Router } from "express";
import {
  CreateUserController,
  GetUserByIdController,
  LoginUserController,
} from "../controllers";

const router = Router();

/* === USERS ROUTES ====*/
const createController = new CreateUserController();
const loginController = new LoginUserController();
const getByIdController = new GetUserByIdController();

router.post("/auth/create", createController.handle.bind(createController));

router.post("/auth/login", loginController.handle.bind(loginController));

// router.use(ensureAuthenticated);
router.get("/user/:id", getByIdController.handle.bind(getByIdController));

export default router;

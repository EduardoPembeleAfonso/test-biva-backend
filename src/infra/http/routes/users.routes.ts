import { Router } from "express";
import {
  CreateUserController,
  GetUserByIdController,
  GetUsersController,
  LoginUserController,
} from "../controllers";
import { ensureAuthenticated } from "@/shared";

const router = Router();

/* === USERS ROUTES ====*/
const createController = new CreateUserController();
const loginController = new LoginUserController();
const getByIdController = new GetUserByIdController();
const getAllUsersController = new GetUsersController();

router.post("/auth/create", createController.handle.bind(createController));

router.post("/auth/login", loginController.handle.bind(loginController));

router.use((req, res, next) => {
  ensureAuthenticated(req, res, next);
});
router.get("/user/:id", getByIdController.handle.bind(getByIdController));
router.get(
  "/users/:id",
  getAllUsersController.handle.bind(getAllUsersController)
);

export default router;

import Router from "express";
import userController from "../controllers/userController.js";

export const userRouter = new Router();

userRouter.post("/login", userController.login);
userRouter.post("/register", userController.register);
userRouter.get("/refresh_token", userController.generateAccessToken);
userRouter.get("/logout", userController.logout);
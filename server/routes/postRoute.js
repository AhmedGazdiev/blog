import Router from "express";
import postController from "../controllers/postController.js";
import auth from '../middleware/auth.js'

export const postRouter = new Router();

postRouter.post("/createPost", postController.createPost);
postRouter.get("/articles", postController.getAll);
postRouter.get("/articles/:id", postController.getOne);
postRouter.patch("/articles/:id", postController.updatePost);
postRouter.delete("/articles/:id", postController.deletePost);
postRouter.patch("/articles/:id/like", auth, postController.likePost);
postRouter.patch("/articles/:id/unlike", auth, postController.unLikePost);
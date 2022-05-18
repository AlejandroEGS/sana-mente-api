import { Router } from "express";
const router = Router();

import * as postsCtrl from "../controllers/post.controller";
import { authJwt } from "../middlewares";

router.get("/", postsCtrl.getPosts);

router.post("/create", [authJwt.verifyToken], postsCtrl.createPost);

router.get("/:postId", postsCtrl.getPostById);

router.put(
  "/:postId",
  [authJwt.verifyToken, authJwt.isAdmin],
  postsCtrl.updatePostById
);

router.delete(
  "/:postId",
  [authJwt.verifyToken, authJwt.isAdmin],
  postsCtrl.deletePostById
);

export default router;

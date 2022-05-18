import { Router } from "express";
const router = Router();

import * as usersCtrl from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";

router.get("/", [authJwt.verifyToken, authJwt.isAdmin], usersCtrl.getUsers);

router.get(
  "/:userId",
  [authJwt.verifyToken, authJwt.isAdmin],
  usersCtrl.getUserById
);

router.put(
  "/:userId",
  [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted],
  usersCtrl.updateUserById
);

router.delete(
  "/:userId",
  [authJwt.verifyToken, authJwt.isAdmin],
  usersCtrl.deleteUserById
);

export default router;

import { Router } from "express";
const router = Router();

import * as usersCtrl from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";

// router.post(
//   "/",
//   [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted],
//   userCtrl.createUser
// );

router.get(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted],
  usersCtrl.getUsers
);

router.get(
  "/:userId",
  [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted],
  usersCtrl.getUserById
);

router.put(
  "/:userId",
  [authJwt.verifyToken, authJwt.isAdmin],
  usersCtrl.updateUserById
);

router.delete(
  "/:userId",
  [authJwt.verifyToken, authJwt.isAdmin],
  usersCtrl.deleteUserById
);

export default router;

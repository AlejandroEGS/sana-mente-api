import { Router } from "express";
const router = Router();

import * as documentsCtrl from "../controllers/document.controller";

router.get("/:keywords", documentsCtrl.getDocuments);

export default router;

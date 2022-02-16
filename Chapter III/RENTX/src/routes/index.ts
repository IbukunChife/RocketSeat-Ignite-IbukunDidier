import { Router } from "express";

import { usersRoutes } from "./usersRoutes";
import { categoriesRoutes } from "./categoriesRoutes";
import { specificationsRoutes } from "./specificationsRoutes";
import { authenticateRoutes } from "./authenticateRoutes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);


export { router };

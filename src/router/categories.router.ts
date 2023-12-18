import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middlewares";
import { categoriesSchemaRequest } from "../schemas/categories.schema";
import { verifyNameExist } from "../middlewares/verifyNameExist.middlewares";
import { isAdmin } from "../middlewares/isAdmin.middleware";
import {
  createCategoryController,
  readCategoriesController,
} from "../controller/categories.controller";
import { verifyToken } from "../middlewares/verifyToken.middleware";

export const categoriesRouter: Router = Router();

categoriesRouter.post(
  "",
  verifyToken,
  isAdmin,
  validateBody(categoriesSchemaRequest),
  verifyNameExist,
  createCategoryController
);
categoriesRouter.get("", readCategoriesController);
categoriesRouter.get("/:id/realEstate");

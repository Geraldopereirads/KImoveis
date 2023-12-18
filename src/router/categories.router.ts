import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middlewares";
import { categoriesSchemaRequest } from "../schemas/categories.schema";
import { verifyNameExist } from "../middlewares/verifyNameExist.middlewares";
import { isAdmin } from "../middlewares/isAdmin.middleware";
import { createCategoryController } from "../controller/categories.controller";

export const categoriesRouter: Router = Router();

categoriesRouter.post(
  "",
  //   validateBody(categoriesSchemaRequest),
  //   verifyNameExist,
  //   isAdmin,
  createCategoryController
);
categoriesRouter.get("");
categoriesRouter.get("/:id/realEstate");

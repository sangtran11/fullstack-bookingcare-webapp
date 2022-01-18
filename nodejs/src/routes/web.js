import express from "express";
import homeController from "../controllers/homeController";

const router = express.Router();

let initWebRoutes = (app) => {
  router.get("/homepage", homeController.getHomePage);
  router.get("/add-crud", homeController.onRenderCrudListPage);

  router.get("/", homeController.onDisplayDataCrud);
  router.post("/post-crud", homeController.onAddNewCrud);
  router.get("/edit-crud/:id", homeController.onRenderCrudEditPage);
  router.post("/update-user-crud", homeController.onUpdateCRUD);
  router.get("/delete-crud/:id", homeController.onDeleteCRUD);

  return app.use("/", router);
};

module.exports = initWebRoutes;

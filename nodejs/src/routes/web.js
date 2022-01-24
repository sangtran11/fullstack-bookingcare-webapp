import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

const router = express.Router();

let initWebRoutes = (app) => {
  router.get("/homepage", homeController.getHomePage);
  router.get("/add-crud", homeController.onRenderCrudListPage);

  router.get("/", homeController.onDisplayDataCrud);
  router.post("/post-crud", homeController.onAddNewCrud);
  router.get("/edit-crud/:id", homeController.onRenderCrudEditPage);
  router.post("/update-user-crud", homeController.onUpdateCRUD);
  router.get("/delete-crud/:id", homeController.onDeleteCRUD);

  // API User
  router.post("/api/login", userController.handleLogin)

  return app.use("/", router);
};

module.exports = initWebRoutes;

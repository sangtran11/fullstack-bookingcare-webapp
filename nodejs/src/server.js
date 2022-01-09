import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setup view engine
viewEngine(app);

// setup web routes
initWebRoutes(app);

// port === undefine -> run port on 6969
let port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log(`Server is running on ${port} ...`);
});

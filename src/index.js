const express = require("express");
const morgan = require("morgan");
const path = require("path");
const exphdbs = require("express-handlebars");
const route = require("./routes");

const app = express();
app.use(express.static(path.join(__dirname, "public")));
const port = 3001;
app.use(morgan("combined"));
app.engine("handlebars", exphdbs());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "/resources/views"));

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

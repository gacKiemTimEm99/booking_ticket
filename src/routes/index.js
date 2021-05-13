const siteRouter = require("./siteRoutes");
function route(app) {
  app.use("/", siteRouter);

  //   app.get("/", (req, res) => {
  //     res.render("home");
  //   });
  //   app.get("/phat", (req, res) => {
  //     res.render("phat");
  //   });
  //   app.get("/search", (req, res) => {
  //     res.render("search");
  //   });
}

module.exports = route;

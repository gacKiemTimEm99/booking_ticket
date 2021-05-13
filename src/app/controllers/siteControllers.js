class siteController {
  index(req, res) {
    res.render("home");
  }
  manage(req, res) {
    res.render("manage");
  }
}
module.exports = new siteController();

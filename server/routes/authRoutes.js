const passport = require("passport");
//require("../services/passport");

module.exports = app => {
  // app is express object
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.session);
    // session contains info that is stored in the cookies
  });
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};

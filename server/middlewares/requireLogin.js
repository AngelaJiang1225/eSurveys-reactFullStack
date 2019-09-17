module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must log in!" });
  }
  next();
  //means everything is fine and continue to the request handle
};

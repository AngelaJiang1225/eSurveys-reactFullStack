const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
// the order is important
// first define the model as require("./models/User");
require("./models/User");
require("./services/passport");

mongoose.connect(String(keys.mongoURI), { useNewUrlParser: true });
const app = express(); // this is for connect the port

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
// calls the function

// Strategy is the property
// port is for heroku deploy
// console.developers.google.com
// google api
const PORT = process.env.PORT || 5000;
app.listen(PORT);

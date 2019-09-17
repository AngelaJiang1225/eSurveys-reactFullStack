const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");
// to set cookies for users
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// return the model of user id
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    //     accessToken => {
    //       console.log(accessToken);
    //     }
    //   )
    // );
    async (accessToken, refreshToken, profile, done) => {
      // existingUser is an instance record, if null then nothing found
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // we already have a record with
        done(null, existingUser);
      } else {
        // dont have a user record with this ID, make a new record!
        const user = await new User({ googleId: profile.id }) // create a mongoose model's instance
          .save();
        done(null, user);
      }
    }
  )
);
//   console.log("access token", accessToken);
//   console.log("refresh token", refreshToken);
//   console.log("profiles", profile);

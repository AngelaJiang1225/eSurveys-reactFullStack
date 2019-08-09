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
      callbackURL: "/auth/google/callback"
    },
    //     accessToken => {
    //       console.log(accessToken);
    //     }
    //   )
    // );
    (accessToken, refreshToken, profile, done) => {
      // existingUser is an instance record, if null then nothing found
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // we already have a record with
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id }) // create a mongoose model's instance
            .save()
            .then(user => done(null, user));
        }
      });

      //   console.log("access token", accessToken);
      //   console.log("refresh token", refreshToken);
      //   console.log("profiles", profile);
    }
  )
);

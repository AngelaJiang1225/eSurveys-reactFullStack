// prod.js - production keys to added on heroku
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN
  //googleRedirectURI: "https://glacial-hamlet-41120.herokuapp.com/"
};
//googleClientID:192838649253-nl03n3cg6ubfmpvs5cdcqtktjc8kg99t.apps.googleusercontent.com
//4dAPGxA4pKEESnTXDTjOLpld

import express from "express";

const Router = express.Router();

//models
import { UserModel } from "../../database/user";
import passport from "passport";

/*
Route   /signup
desc    with email and password
params  none
access  public
method  post
*/

Router.post("/signup", async (req, res) => {
  try {
    //checking for already exists

    await UserModel.findEmailAndPhone(email, phoneNumber);

    //DB
    const newUser = await UserModel.create(req.body.credentials);

    //JWT auth token
    const token = newUser.generateJwtToken();

    return res.status(200).json({ token });

    //end try
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route   /signin
desc    signin with email and password
params  none
access  public
method  post
*/
Router.post("/signin", async (req, res) => {
  try {
    //checking for user exists
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);

    //JWT auth token
    const token = user.generateJwtToken();

    return res.status(200).json({ token, status: "Success" });

    //end try
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route   /google
desc    Google signin
params  none
access  public
method  get
*/
Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

/*
Route   /google/callback
desc    Google signin callback
params  none
access  public
method  get
*/
Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    return res.json({ token: req.session.passport.user.token });
  }
);

export default Router;

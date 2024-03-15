import express from "express";

const Router = express.Router();

//models
import { UserModel } from "../../database/user";
import passport from "passport";

//Validation
import { ValidateSignup, ValidateSignin } from "../../validation/auth";

/*
Route   /signup
desc    with email and password
params  none
access  public
method  post
*/

Router.post("/signup", async (req, res) => {
  try {
    await ValidateSignup(req.body.credentials);

    await UserModel.findEmailAndPhone(req.body.credentials);

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
    await ValidateSignin(req.body.credentials);

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
    return res.redirect(
      `http://localhost:3000/google/${req.session.passport.user.token}`
    );
  }
);

export default Router;

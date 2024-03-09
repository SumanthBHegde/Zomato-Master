import express from "express";

const Router = express.Router();

//models
import { UserModel } from "../../database/user";

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

export default Router;

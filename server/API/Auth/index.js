import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
    const { email, password, fullname, phoneNumber } = req.body.credentials;

    //checking for already exists
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phoneNumber });

    if (checkUserByEmail || checkUserByPhone) {
      return res.json({ error: "User already Exists" });
    }

    //hashing
    const bcryptSalt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, bcryptSalt);

    //DB
    await UserModel.create({
      ...req.body.credentials,
      password: hashedPassword,
    });

    //JWT auth token
    const token = jwt.sign({ user: { fullname, email } }, "ZomatoApp");

    return res.status(200).json({ token });

    //end try
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;

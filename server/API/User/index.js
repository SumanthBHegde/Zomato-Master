import express from "express";

import { UserModel } from "../../database/allModels";

const Router = express.Router();

/*
Route   /
des     Get an user data
params  _id
body    none
access  public
method  get
*/
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const getUser = await UserModel.findById(_id);
    const { fullName } = getUser;

    return res.json({ user: { fullName } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route   /update
des     Update an user data
params  _userId
body    user data
access  public
method  put
*/
Router.put("/update/:_userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const { userData } = req.body;
    const updateUserData = await UserModel.findByIdAndUpdate(
      userId,
      {
        $set: userData,
      },
      {
        $new: true,
      }
    );

    return res.json({ user: updateUserData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route        /
 * Des          GET authorized user data
 * Params       none
 * Access       Public
 * Method       GET
 */
Router.get("/", passport.authenticate("jwt"), async (req, res) => {
  try {
    const { email, fullName, phoneNumber, address } =
      req.session.passport.user._doc;

    return res.json({ user: { email, fullName, phoneNumber, address } });
  } catch {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;

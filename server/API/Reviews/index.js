import express from "express";
import passport from "passport";

import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/*
Route   /new
des     Add new review
params  none
body    review objext
access  private
method  post
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
  try {
    const { _id } = req.session.passport.user._doc;
    const { reviewData } = req.body;

    await ReviewModel.create({ ...reviewData, user: _id });

    return res.json({ review: "Successfully Created Review" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route   /delete
des     delete a review
params  _id
access  public
method  delete
*/
Router.delete("/delete/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    await ReviewModel.findByIdAndDelete(_id);

    return res.json({ review: "Successfully Deleted Review" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default Router;

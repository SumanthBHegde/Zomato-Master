import express from "express";
import passport from "passport";

import { OrderModel } from "../../database/allModels";

const Router = express.Router();

/*
Route   /
des     get all orders based on id
params  _id
access  public
method  get
*/
Router.get(
  "/:_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { _id } = req.params;
      const getOrders = await OrderModel.findOne({ user: _id });

      if (!getOrders) {
        return res.status(400).json({ error: "User not found" });
      }
      //last
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/*
Route   /new
des     add new order
params  _id
access  public
method  post
*/
Router.post("/new/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { orderDetails } = req.body;
    const addNewOrder = await OrderModel.findOneAndUpdate(
      {
        user: _id,
      },
      {
        $push: { orderDetails: orderDetails },
      },
      {
        new: true,
      }
    );

    return res.json({ order: addNewOrder });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default Router;

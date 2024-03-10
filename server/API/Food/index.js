//Libraries
import express from "express";

//Database Model
import { FoodModel } from "../../database/allModels";

const Router = express.Router();

/*
Route   /
des     get all the foods based on particulat restaurant
params  _id
access  public
method  get
*/
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const foods = await FoodModel.find({ restaurant: _id });
    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ errror: error.message });
  }
});

/*
Route   /r
des     get all the foods based on particulat category
params  category
access  public
method  get
*/
Router.get("/r/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const food = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });

    return res.json({ food });
  } catch (error) {
    return res.status(500).json({ errror: error.message });
  }
});

export default Router;

//adding lib
import express from "express";

//database model
import { MenuModel, ImageModel } from "../../database/menu";

const Router = express.Router();

/*
Route   /list
des     get the list menu of a paricular restaurant
params  _id
access  public
method  get
*/
Router.get("/list/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await MenuModel.findOne(_id);

    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ errror: error.message });
  }
});

/*
Route   /image
des     get menu image based on id
params  _id
access  public
method  get
*/
Router.get("/image/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await ImageModel.findOne(_id);

    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ errror: error.message });
  }
});

export default Router;

//libraries
import express from "express";

//database model
import { ImageModel } from "../../database/allModels";

const Router = express.Router();

//Aws s3 bucket config
const s3Bucket = new AWS.S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
});

/*
Route   /
des     uploading given image s3 bucket, then saving the file to mongodb
params  none
access  public
method  get
*/
Router.post("/", async (req, res) => {
  try {
  } catch (error) {}
});

export default Router;

require("dotenv").config();

//libraries
import express from "express";
import multer from "multer";

//database model
import { ImageModel } from "../../database/allModels";

//Utilites
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

//Multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route   /
des     uploading given image s3 bucket, then saving the file to mongodb
params  none
access  public
method  get
*/
Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    //s3 bucket options
    const bucketOptions = {
      Bucket: "zomato-devtown",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read",
    };

    const uploadImage = await s3Upload(bucketOptions);
    //last line
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

//find image by id(params)

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const image = await ImageModel.findById(_id);

    return res.status(200).json(image);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;

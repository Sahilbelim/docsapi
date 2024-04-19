const express = require("express");
const UserSchema = require("../routes/user");
const dotenv = require("dotenv");
const cloudinary  = require( "cloudinary");
dotenv.config();
const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_APIKEY,
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
});

router.route("/").get((req, res) => {
  res.send("hello from dell e !");
});

module.exports=router;
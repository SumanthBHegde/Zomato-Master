//env variable
require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//config
import routeConfig from "./config/route.config";
import googleAuthConfig from "./config/google.config";

//API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Orders from "./API/Orders";
import Reviews from "./API/Reviews";

//database connection
import ConnectDB from "./database/connection";

const zomato = express();
const session = require("express-session");

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

// **Added `express-session` middleware:**
zomato.use(
  session({
    secret: process.env.MY_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

zomato.use(passport.initialize());
zomato.use(passport.session());

//passport configuaration
googleAuthConfig(passport);
routeConfig(passport);

//For application routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Orders);
zomato.use("/reviews", Reviews);

zomato.get("/", (req, res) => res.json({ message: "Setup Success Yay!!" }));

zomato.listen(4000, () =>
  ConnectDB()
    .then(() => console.log("Server is up and running"))
    .catch((e) => console.log("DB connection failed" + e))
);

import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const route = express.Router();

route.get("/test", test);
route.put("/update/:userId", verifyToken, updateUser);

export default route;

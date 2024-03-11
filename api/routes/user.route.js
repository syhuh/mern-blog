import express from "express";
import {
  test,
  updateUser,
  deleteUser,
  signout,
  getUsers,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const route = express.Router();

route.get("/test", test);
route.put("/update/:userId", verifyToken, updateUser);
route.delete("/delete/:userId", verifyToken, deleteUser);
route.post("/signout", signout);
route.get("/getusers", verifyToken, getUsers);

export default route;

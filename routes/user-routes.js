import express from "express";
import { getAllUser, signUp, signIn } from "../controllers/user-controller.js";

const router = express.Router();

// Middleware for setting CORS headers
router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  next(); // Call next to proceed to the next middleware or route handler
});

// Routes
router.get("/", getAllUser);
router.post("/signup", signUp);
router.post("/signin", signIn);

export default router;

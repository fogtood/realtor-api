import { Router } from "express";
import passport from "passport";

import "../config/google.js";
import {
  googleAuth,
  signIn,
  signOut,
  signUp,
  getUser,
} from "../controllers/auth.controller.js";
import authorize from "../middleware/auth.middleware.js";

const authRouter = Router();

authRouter.post("/sign-in", signIn);

authRouter.post("/sign-up", signUp);

authRouter.post("/sign-out", signOut);

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleAuth
);

authRouter.get("/me", authorize, getUser);

export default authRouter;

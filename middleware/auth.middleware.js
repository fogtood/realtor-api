import jwt from "jsonwebtoken";

import User from "../models/user.model.js";

const authorize = async (req, res, next) => {
  let token;
  let bearerToken;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    bearerToken = req.headers.authorization.split(" ")[1];
  }

  const cookieToken = req.cookies.token;

  token = bearerToken || cookieToken;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", error: error.message });
  }
};

export default authorize;

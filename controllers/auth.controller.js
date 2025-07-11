import jwt from "jsonwebtoken";

export const signIn = (req, res) => res.send("Sign in");

export const signOut = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};

export const googleAuth = (req, res) => {
  const token = jwt.sign({ userId: req.user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // set true in production with HTTPS
    sameSite: "lax",
  });

  res.redirect("http://localhost:3000/dashboard");
};

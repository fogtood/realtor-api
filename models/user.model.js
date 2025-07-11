import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "User Name is required"] },
    email: { type: String, required: true, unique: true },
    password: { type: String, minLength: 6 },
    googleId: { type: String, unique: true },
    avatar: { type: String },
    allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

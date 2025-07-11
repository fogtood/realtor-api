import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is required."] },
    description: { type: String, required: [true, "Description is required."] },
    propertyType: {
      type: String,
      required: [true, "Property type is required."],
    },
    location: { type: String, required: [true, "Location is required."] },
    price: { type: Number, required: [true, "Price is required."] },
    photo: { type: String, required: [true, "Photo is required."] },
    allProperties: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);

export default Property;
